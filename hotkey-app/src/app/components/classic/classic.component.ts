import { Component, OnInit, Input } from '@angular/core';
import { Action } from '../../static/action'
import { TestSessionService } from '../../services/test-session.service'

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {
  @Input() action: Action;

  constructor(private testSessionService: TestSessionService) { }

  ngOnInit() {
  }

  onClick(action): void {
    console.log("Classic clicked");
    if(this.testSessionService.readyForAnswer())
      this.testSessionService.answer(action);
  }
}
