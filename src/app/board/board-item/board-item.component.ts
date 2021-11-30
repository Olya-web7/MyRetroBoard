import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { BoardService } from 'src/app/board.service';
import { Comment, Card, Column } from 'src/app/models';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit {
  columns!: Column[];

  @Input() item!: Card
  @Output() emitText: EventEmitter<Comment> = new EventEmitter();
  @Output() emitCardItem: EventEmitter<{card: Card}> = new EventEmitter();
  @Output() emitDeleteCard: EventEmitter<number> = new EventEmitter();

  commentInput = ''
  open = false;
  constructor(
    public auth: AuthService,
    private boardService: BoardService,
  ) { }

  ngOnInit(): void {
    this.boardService.getColumn().subscribe(columns => {
      console.log(columns);
      this.columns = columns;
    });
  }

  // add comment
  onCommentTextEmit(id: number) {
    this.emitText.emit({ id, text: this.commentInput });
    this.commentInput = ''
  }

  // like
  onCardItemEmit(card: Card) {
    this.emitCardItem.emit({card})
  }

  onCardDelete(id: number) {
    this.emitDeleteCard.emit(id)
  }

}
