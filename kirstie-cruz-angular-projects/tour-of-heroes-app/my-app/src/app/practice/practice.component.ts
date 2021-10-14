import { Component, OnInit } from '@angular/core';
import { BattleFields } from '../battlefields';
import { BATTLEFIELDS } from '../mock-battefields';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  BattleFields = BATTLEFIELDS;
  selectedBattleFields?: BattleFields;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(battlefields: BattleFields): void {
    this.selectedBattleFields = battlefields;
  }
}
