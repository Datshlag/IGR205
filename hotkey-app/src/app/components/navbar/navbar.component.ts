import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TestSessionService } from '../../services/test-session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  hotkeyMode: string;
  modes: string[] = ['classic', 'disabled', 'audio'];

  constructor(private testSessionService: TestSessionService) { }

  ngOnInit() {
    this.subscription = this.testSessionService.hotkeyMode$
      .subscribe(mode => this.hotkeyMode = mode);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onModeClick(mode: string): void {
    if (!this.testSessionService.isStarted)
      this.testSessionService.changeHotkeyMode(mode);
    else
      console.log("Cannot change mode when session is started");
  }
}
