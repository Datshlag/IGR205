import { Component, OnInit, Input } from '@angular/core';
import { Action } from '../../static/action'
import { TestSessionService } from '../../services/test-session.service'

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  @Input() action: Action;

  constructor() { }

  ngOnInit() {
  }

  onClick(action: Action): void {
    console.log("Audio clicked");
  }
}
