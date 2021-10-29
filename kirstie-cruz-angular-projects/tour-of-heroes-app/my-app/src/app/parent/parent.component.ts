import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  currentItem = 'Television';

  items = ['Refrigerator', 'Gas Range', 'Electric Fan', 'Microwave Oven'];
    addItem(newItem: string) {
      this.items.push(newItem);
    }

    crossOffItem(item: string) {
      console.warn(`Parent says: crossing off ${item}.`);
    }
  constructor() { }

  ngOnInit(): void {
  }

}