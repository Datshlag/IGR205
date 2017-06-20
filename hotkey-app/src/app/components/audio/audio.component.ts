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

  constructor(private testSessionService: TestSessionService) { }

  ngOnInit() {
  }

  onClick(action: Action): void {
    if(action.audioUrl) {
      let audio = new Audio(action.audioUrl);
      audio.play();
    } else
      console.log("No audio file for this action");
    if(this.testSessionService.isStarted && !this.testSessionService.waitingNext)
      this.testSessionService.answer(action);
  }
}
