import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BoardItemComponent } from './board-item/board-item.component';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import { DialogModule } from '../components/dialog/dialog.module';
import { ColorComponent } from './color/color.component';

@NgModule({
  declarations: [
    BoardComponent,
    BoardItemComponent,
    CommentComponent,
    ColorComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    DialogModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
