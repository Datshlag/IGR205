import { Component, OnInit } from '@angular/core';
import { Action } from '../../models/action';
import { Menu } from '../../models/menu';

import { ActionsService } from '../../services/actions.service';

@Component({
  selector: 'app-traditionnal-design',
  templateUrl: './traditionnal-design.component.html',
  styleUrls: ['./traditionnal-design.component.css']
})
export class TraditionnalDesignComponent implements OnInit {
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
