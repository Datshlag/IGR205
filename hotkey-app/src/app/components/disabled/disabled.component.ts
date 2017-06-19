import { Component, OnInit, Input } from '@angular/core';
import { Action } from '../../static/action'
import { TestSessionService } from '../../services/test-session.service'

@Component({
  selector: 'app-disabled',
  templateUrl: './disabled.component.html',
  styleUrls: ['./disabled.component.css']
})
export class DisabledComponent implements OnInit {
  @Input() action: Action;

  constructor() { }

  ngOnInit() {
  }

  onClick(action): void {
    console.log("Clicking is disabled");
  }
}
