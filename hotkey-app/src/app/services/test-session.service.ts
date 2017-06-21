import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ActionsService } from './actions.service';

import { Action } from '../static/action';
import { Result } from '../static/result';

const logCycle = 3;
const maxAction = 4;

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
    this.isStarted = false;
    this.actionCount = 0;
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
    this.logResult(action);
    if(action === this.currentAction) {
      this.actionCount += 1;
      this.updateCurrentAction();
      if (!this.checkEnd())
        this.waitingNext = true;
      console.log('good answer');
    } else {
      this.waitingNext = true;
      console.log('bad answer');
    }
  }

  updateCurrentAction(): void {
    let currentActionIndex = Math.floor(Math.random() * this.actionSet.length);
    this.currentAction = this.actionSet[currentActionIndex];
  }

  logResult(action: Action): void {
    // Logging end time for the current action
    let d = new Date();
    this.currentResult.time = d.getTime() - this.actionStartDate.getTime();

    // Logging the action answered and its correctness
    // TODO: IMPLEMENT ACTION ID
    this.currentResult.actionId = 0;
    this.currentResult.correctAnswer = action === this.currentAction;

    // Logging menuDelay if necessary
    if(this.currentResult.menuOpened)
      this.currentResult.menuDelay = d.getTime() - this.menuOpenedDate.getTime();

    // Sending the result to the server
    this.sendResults();

    // Reseting currentResult
    this.currentResult = new Result();
  }

  checkEnd(): boolean {
    if (this.actionCount === this.maxAction) {
      this.stopSession();
      return true;
    }
  }

  sendResults(): void  {
    let d = new Date();
    const result = {
      time: d.getTime() - this.startDate.getTime(),
      result: this.currentResult
    };
    console.log(result);
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
