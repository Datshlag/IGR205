import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ActionsService } from './actions.service';

import { Action } from '../static/action';
import { Result } from '../static/result';

const logCycle = 3;
const maxAction = 10;

@Injectable()
export class TestSessionService {
  private hotkeyModeSource: BehaviorSubject<string> = new BehaviorSubject("classic");
  hotkeyMode$ = this.hotkeyModeSource.asObservable();
  isStarted: boolean = false;
  waitingNext: boolean;
  actionSet: Action[] = [];
  currentAction: Action;
  actionCount: number = 0;
  maxAction: number = maxAction;
  startDate: Date;
  actionStartDate: Date;
  menuOpenedDate: Date;
  currentResult: Result;
  currentLogs: Result[];

  constructor(private actionsService: ActionsService) { }

  changeHotkeyMode(mode): void {
    this.hotkeyModeSource.next(mode);
    console.log("Mode switched to " + mode);
  }

  startSession(): void {
    this.isStarted = true;
    this.waitingNext = true;
    this.currentResult = new Result();
    this.currentLogs = [];
    this.startDate = new Date();
    this.updateCurrentAction();
  }

  startNext(): void {
    this.waitingNext = false;
    this.actionStartDate = new Date();
  }

  stopSession(): void {
    this.sendResults();
    this.isStarted = false;
    this.currentAction = undefined;
  }

  getActionSet(): void {
    this.actionsService.getMenus().then(menus => {
      for (let i=0; i <menus.length; i++) {
        this.actionSet = this.actionSet.concat(menus[i].actions);
      }
    });
  }

  readyForAnswer(): boolean {
    return this.isStarted && !this.waitingNext;
  }

  answer(action): void  {
    if(action === this.currentAction) {
      this.storeResult();
      this.actionCount += 1;
      this.updateCurrentAction();
      this.checkEnd();
      console.log('good answer');
      this.waitingNext = true;
    } else {
      this.currentResult.errorCount += 1;
      console.log('bad answer');
    }
  }

  updateCurrentAction(): void {
    let currentActionIndex = Math.floor(Math.random() * this.actionSet.length);
    this.currentAction = this.actionSet[currentActionIndex];
  }

  storeResult(): void {
    // Logging end time for the current action
    let d = new Date();
    this.currentResult.time = d.getTime() - this.actionStartDate.getTime();
    // Logging menuDelay if necessary
    if(this.currentResult.menuOpened)
      this.currentResult.menuDelay = d.getTime() - this.menuOpenedDate.getTime();
    // Storing action in the logs array
    this.currentLogs.push(this.currentResult);
    this.currentResult = new Result();
    // Checking if the logs need to be sent
    if(this.currentLogs.length === logCycle)
      this.sendResults();
  }

  checkEnd(): void {
    if (this.actionCount === this.maxAction) {
      this.stopSession();
    }
  }

  sendResults(): void  {
    let d = new Date();
    const result = {
      time: d.getTime() - this.startDate.getTime(),
      logs: this.currentLogs
    };
    console.log(result);
    this.currentLogs = [];
  }

  // Methods called by component to update the result details
  hotkeyUsed(action): void {
    if(action === this.currentAction)
      this.currentResult.hotkeyUsed = true;
  }

  menuOpened(): void {
    if (!this.currentResult.menuOpened) {
      this.currentResult.menuOpened = true;
      this.menuOpenedDate = new Date();
    }
  }
}
