import { Component, OnInit } from '@angular/core';
import { TestSessionService } from '../../services/test-session.service';

@Component({
  selector: 'app-session-display',
  templateUrl: './session-display.component.html',
  styleUrls: ['./session-display.component.css']
})
export class SessionDisplayComponent implements OnInit {

  constructor(private testSessionService: TestSessionService) { }

  ngOnInit() {
  }

  isStarted(): boolean {
    return this.testSessionService.isStarted;
  }

  isWaitingNext(): boolean {
    return this.testSessionService.waitingNext;
  }

  startSession(): void {
    this.testSessionService.startSession();
  }

  startNext(): void {
    this.testSessionService.startNext();
  }

  stopSession(): void {
    this.testSessionService.stopSession();
  }
}
