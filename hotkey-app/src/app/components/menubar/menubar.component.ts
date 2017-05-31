import { Component, OnInit } from '@angular/core';
import { Action } from '../../models/action';
import { Menu } from '../../models/menu';

import { ActionsService } from '../../services/actions.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenuBarComponent implements OnInit {
  menus: Menu[] = [];

  constructor(private actionService: ActionsService) { }

  ngOnInit() {
    this.getMenus();
  }

  onClick(action): void {
    console.log(action);
  }

  getMenus(): void {
    this.actionService.getMenus().then(menus => this.menus = menus);
  }
}
