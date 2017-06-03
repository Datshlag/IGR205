import { Injectable } from '@angular/core';
import { Action } from '../models/action';
import { ActionsService } from './actions.service';

@Injectable()
export class TestSessionService {
  isStarted: boolean = false;
  actionSet: Action[] = [];
  currentTime: number = 0;
  currentAction: number = 0;
  maxAction: number = 0;
  errorCount: number = 0;

  constructor(private actionsService: ActionsService) { }

  toggleStarted(): void {
    this.isStarted = !this.isStarted;
  }

  getActionSet(): void {
    this.actionsService.getMenus().then(menus => {
      for (let i=0; i <menus.length; i++) {
        this.actionSet = this.actionSet.concat(menus[i].actions);
      }
      // debug only
      this.maxAction = this.actionSet.length;
    });
  }

  answer(action): void  {
    if(action === this.actionSet[this.currentAction]) {
      this.currentAction += 1;
      this.checkEnd();
      console.log('good answer');
    } else {
      this.errorCount += 1;
      console.log('bad answer');
    }
  }

  checkEnd(): void {
    if (this.currentAction === this.maxAction) {
      this.sendResults();
      this.reset();
    }
  }

  reset(): void {
    this.toggleStarted();
    this.currentAction = 0;
    this.errorCount = 0;
  }

  sendResults(): void  {
    const result = {
      errorCount: this.errorCount
    };
    console.log(result);
  }
}
