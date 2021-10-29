import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() item = '';

  @Output() newItemEvent = new EventEmitter<string>();
  
    addNewItem(value: string) {
      this.newItemEvent.emit(value);
    }
  
  @Output() deleteRequest = new EventEmitter<string>();

    lineThrough = '';
  
    delete() {
      this.deleteRequest.emit(this.item);
      this.lineThrough = this.lineThrough ? '' : 'line-through';
    }

  constructor() { }

  ngOnInit(): void {
  }

}
