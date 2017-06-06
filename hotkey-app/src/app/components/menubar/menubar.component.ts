import { Component, OnInit } from '@angular/core';
import { Menu } from '../../static/menu';
import { Utils } from '../../static/utils';

import { ActionsService } from '../../services/actions.service';
import { TestSessionService } from '../../services/test-session.service';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  host: {
    '(window:keydown)': 'onKeyDown($event)',
  }
})
export class MenuBarComponent implements OnInit {
  menus: Menu[] = [];
  hotkeys: any;

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

  getMenus(): any {
    this.actionsService.getMenus().then(menus => {
      this.menus = menus
      this.sortHotkeys();
    });
  }

  sortHotkeys(): void {
    let hotkeys = {};
    for (let i=0; i<this.menus.length; i++) {
      for (let j=0; j<this.menus[i].actions.length; j++) {
        let action = this.menus[i].actions[j];
        Utils.createNestedObject(hotkeys,
                                 [action.modifier, action.shortcut], action);
      }
    }
    this.hotkeys = hotkeys;
    console.log(hotkeys);
  }

  onKeyDown(event: any) {
    event.preventDefault();
    console.log(event);
    if(event.key != 'Alt'
      && event.key != 'Meta'
      && event.key != 'Control'
      && event.key != 'Shift')
      {
        let modifiers: string = "";
        if(event.altKey)
          modifiers += "alt ";
        if(event.ctrlKey)
          modifiers += "ctrl ";
        if(event.metaKey)
          modifiers += "meta ";
        if(event.shiftKey)
          modifiers += "shift ";

        // Deleting last space
        if (modifiers)
          modifiers = modifiers.slice(0, modifiers.length -1);
        else
          modifiers = "none";

        let action = this.hotkeys[modifiers][event.key];
        if(this.testSessionService.isStarted)
          this.testSessionService.answer(action);
      }
  }
}
