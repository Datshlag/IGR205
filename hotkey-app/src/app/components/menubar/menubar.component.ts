import { Component, OnInit, OnDestroy, style, state, animate, transition, trigger } from '@angular/core';

import { Menu } from '../../static/menu';
import { Utils } from '../../static/utils';
import { Subscription } from 'rxjs/Subscription';

import { ActionsService } from '../../services/actions.service';
import { TestSessionService } from '../../services/test-session.service';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  host: {
    '(window:keydown)': 'onKeyDown($event)',
  },
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(200, style({opacity:1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(200, style({opacity:0}))
      ])
    ])
  ]
})
export class MenuBarComponent implements OnInit, OnDestroy {
  menus: Menu[] = [];
  hotkeys: any;
  subscription: Subscription;
  hotkeyMode: string;

  constructor(private actionsService: ActionsService,
              private testSessionService: TestSessionService) { }

              ngOnInit() {
                this.getMenus();
                this.testSessionService.getActionSet();
                this.subscription = this.testSessionService.hotkeyMode$
                .subscribe(mode => this.hotkeyMode = mode);
              }

              ngOnDestroy() {
                // Prevent momory leak
                this.subscription.unsubscribe();
              }

              onClick(action): void {
                if (this.testSessionService.readyForAnswer()) {
                  this.testSessionService.answer(action);
                }
              }

              menuOpened(): void {
                if(this.testSessionService.readyForAnswer())
                  this.testSessionService.menuOpened();
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
                if(event.key != 'Alt'
                   && event.key != 'Meta'
                 && event.key != 'Control'
                 && event.key != 'Shift') {
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

                   let action = undefined;
                   if(this.hotkeys[modifiers])
                     action = this.hotkeys[modifiers][event.key.toLowerCase()];
                   if(this.testSessionService.readyForAnswer()) {
                     this.testSessionService.hotkeyUsed(action);
                     this.testSessionService.answer(action);
                   }
                 }
              }
}
