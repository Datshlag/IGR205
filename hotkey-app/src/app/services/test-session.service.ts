import { Injectable } from '@angular/core';
import { Action } from '../models/action';
import { ActionsService } from './actions.service';

const maxAction = 10;

@Injectable()
export class TestSessionService {
  isStarted: boolean = false;
  actionSet: Action[] = [];
  currentAction: Action;
  actionCount: number = 0;
  maxAction: number = maxAction;
  errorCount: number = 0;
  startDate: Date;

  constructor(private actionsService: ActionsService) { }

  startSession(): void {
    this.isStarted = true;
    let d = new Date();
    this.startDate = d;
    this.updateCurrentAction();
  }

  getActionSet(): void {
    this.actionsService.getMenus().then(menus => {
      for (let i=0; i <menus.length; i++) {
        this.actionSet = this.actionSet.concat(menus[i].actions);
      }
    });
  }

  answer(action): void  {
    if(action === this.currentAction) {
      this.actionCount += 1;
      this.updateCurrentAction();
      this.checkEnd();
      console.log('good answer');
    } else {
      this.errorCount += 1;
      console.log('bad answer');
    }
  }

  updateCurrentAction(): void {
    let currentActionIndex = Math.floor(Math.random() * this.actionSet.length);
    this.currentAction = this.actionSet[currentActionIndex];
  }

  checkEnd(): void {
    if (this.actionCount === this.maxAction) {
      this.sendResults();
      this.reset();
    }
  }

  reset(): void {
    this.isStarted = false;
    this.currentAction = undefined;
    this.errorCount = 0;
  }

  sendResults(): void  {
    let d = new Date();
    const result = {
      errorCount: this.errorCount,
      time: d.getTime() - this.startDate.getTime()
    };
    console.log(result);
  }
}
