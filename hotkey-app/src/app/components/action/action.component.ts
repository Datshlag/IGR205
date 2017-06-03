import { Component, OnInit, Input } from '@angular/core';
import { Action } from '../../models/action';
import { ACTIONS } from '../../models/mock-actions';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  @Input() action: Action;

  constructor() { }

  ngOnInit() {
  }

}
