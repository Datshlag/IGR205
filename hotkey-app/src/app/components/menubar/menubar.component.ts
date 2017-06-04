import { Component, OnInit } from '@angular/core';
import { Action } from '../../models/action';
import { Menu } from '../../models/menu';

import { ActionsService } from '../../services/actions.service';
import { TestSessionService } from '../../services/test-session.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  host: {
    '(window:keydown)': 'onKeyDown($event)',
    '(window:keyup)': 'onKeyUp($event)'
  }
})
export class MenuBarComponent implements OnInit {
  menus: Menu[] = [];

  constructor(private actionsService: ActionsService,
             private testSessionService: TestSessionService) { }

  ngOnInit() {
    this.getMenus();
    this.testSessionService.getActionSet();
  }

  onClick(action): void {
    if (this.testSessionService.isStarted) {
      this.testSessionService.answer(action);
    }
  }

  getMenus(): void {
    this.actionsService.getMenus().then(menus => this.menus = menus);
  }

  onKeyDown(event: any) {
    console.log('down');
    console.log(event);
  }

  onKeyUp(event: any) {
    console.log('up');
    console.log(event);
  }
}
