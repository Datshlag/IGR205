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

  constructor(private testSessionService: TestSessionService) { }

  ngOnInit() {
    this.subscription = this.testSessionService.hotkeyMode$
      .subscribe(mode => this.hotkeyMode = mode);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onModeClick(mode: string): void {
    this.testSessionService.changeHotkeyMode(mode);
  }
}
