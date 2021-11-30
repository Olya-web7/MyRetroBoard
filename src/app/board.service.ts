import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { Card, Column } from './models';
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({providedIn: 'root'})
export class BoardService {
  boardCollection!: AngularFirestoreCollection<Column>;
  columns!: Observable<any[]>

  private initBoard = [
    {id: 1, title: 'Went well', color: '#009785', list: []}
  ]
  private board: Column[] = this.initBoard
  private board$ = new BehaviorSubject<Column[]>(this.initBoard)

  constructor(private http: HttpClient, public afs: AngularFirestore) {
    this.columns = this.afs.collection('board').valueChanges();
  }

  getColumn() {
    return this.columns;
  }

  getBoard$() {
    return this.board$.asObservable()
  }

  addColumn(title: string) {
    let newColumn: Column = {
      id: Date.now(),
      title: title,
      color: '#009785',
      list: [],
    };
    this.board = [...this.board, newColumn];
    this.board$.next([...this.board]);
    this.http.post<Column>(`${environment.firebase.databaseURL}/board.json`, newColumn)
      .subscribe(() => {
        console.log(newColumn);
      })
  }

  addCard(text: string, columnId: number) {
    const newCard: Card = {
      id: Date.now(),
      text,
      like: 0,
      comments: [],
    };
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = [...column.list, newCard];
      }
      return column;
    });
    this.board$.next([...this.board]);
    localStorage.setItem('Card', newCard.text);
    console.log(newCard);
  }

  deleteCard(cardId: number, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = column.list.filter((card: Card) => card.id !== cardId);
      }
      return column;
    });
    this.board$.next([...this.board]);
    // localStorage.removeItem('Card');
  }

  // deleteCard(cardId: number, columnId: number) {
  //   this.http.delete('http://localhost:3000/api/board' + columnId)
  //     .subscribe(() => {
  //       console.log('deleted')
  //     });
  //   this.board = this.board.map((column: Column) => {
  //     if (column.id === columnId) {
  //       column.list = column.list.filter((card: Card) => card.id !== cardId);
  //     }
  //     return column;
  //   });
  //   this.board$.next([...this.board]);
  // }

  addLike(cardId: number, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        let list = column.list.map((card: Card) => {
          if (card.id === cardId) {
            card.like++
          }
          return card;
        });
        column.list = list;
        return column;
      } else {
        return column;
      }
    });
    this.board$.next([...this.board]);
  }

  addComment(columnId: number, cardId: number, text: string) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        const list = column.list.map((card: Card) => {
          if (card.id === cardId) {
            let newComment = {
              id: Date.now(),
              text,
            };
            card.comments = [newComment, ...card.comments];
            console.log(newComment);
          }
          return card;
        });
        column.list = list;
      }
      return column;
    });
    this.board$.next([...this.board]);
  }

  changeColumnColor(color: string, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.color = color;
      }
      return column;
    });
    this.board$.next([...this.board]);
  }
}
