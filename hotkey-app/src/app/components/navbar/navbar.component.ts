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
  userMode: boolean = false;
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

  onRandomizeClick(): void {
    let randomIndex = Math.floor(Math.random() * this.modes.length);
    this.testSessionService.changeHotkeyMode(this.modes[randomIndex]);
  }

  showMode(mode: string): boolean {
    return !this.userMode || (this.hotkeyMode == mode);
  }

  toggleUserMode(): void {
    this.userMode = !this.userMode;
  }
}
