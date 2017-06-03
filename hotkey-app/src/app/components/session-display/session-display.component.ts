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

  toggleStarted(): void {
    this.testSessionService.toggleStarted();
  }
}
