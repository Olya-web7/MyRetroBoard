import { Component, OnInit, Output, EventEmitter } from '@angular/core';

enum colors {
  green = '#009785',
  pink = '#e82b63',
  blue = '#208eed',
  purple = '#912f84',
  violet = '#6e1d96',
}

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  @Output() emitColor: EventEmitter<string> = new EventEmitter();

  colorsData = Object.values(colors)

  constructor() { }

  ngOnInit(): void {
  }

  onColorEmit(color: string) {
    this.emitColor.emit(color);
  }

}
