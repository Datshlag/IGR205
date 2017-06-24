import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ActionsService } from './actions.service';

import { Action } from '../static/action';
import { Result } from '../static/result';

const maxAction = 20;
const startSessionUrl = '/log/session';
const logActionUrl = '/log/action';

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
  currentSessionId: number;
  alertType: string;
  startDate: Date;
  actionStartDate: Date;
  menuOpenedDate: Date;
  currentResult: Result;
  currentLogs: Result[];

  constructor(private actionsService: ActionsService,
             private http: Http) { }

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

    // Post method to notify server of starting session and get session ID
    this.http.post(startSessionUrl, {}).subscribe(
      data => {
        let id = data.json().id;
        this.currentSessionId = id;
        console.log("Session started with id " + id);
      }
    )
  }

  startNext(): void {
    this.waitingNext = false;
    this.actionStartDate = new Date();

    // Reseting currentResult and setting its session ID
    this.currentResult = new Result();
    this.currentResult.sessionId = this.currentSessionId;

    // Removing alert if needed
    this.alertType = undefined;
  }

  stopSession(): void {
    this.isStarted = false;
    this.actionCount = 0;
    this.currentAction = undefined;
    this.showAlert('end');
  }

  getActionSet(): void {
    this.actionsService.getMenus().then(menus => {
      for (let i=0; i <menus.length; i++) {
        var actions = menus[i].actions 
        var final_actions = []

        for (let j=0; j<actions.length; j++) {
          if(actions[j].modifier != "alt") {
            final_actions.push(actions[j])
          }
        }

        console.log(final_actions)
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
      if (!this.checkEnd()) {
        this.waitingNext = true;
        this.showAlert('correct');
      }
    } else {
      this.waitingNext = true;
      this.showAlert('wrong');
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
    this.http.post(logActionUrl, result).subscribe();
  }

  showAlert(alertType: string): void {
    setTimeout(() => {this.alertType = alertType;}, 400);
    setTimeout(() => {this.alertType = undefined;}, 3000);
  }

  // Methods called by component to update the result details
  hotkeyUsed(action): void {
    this.currentResult.hotkeyUsed = true;
  }

  menuOpened(): void {
    if (!this.currentResult.menuOpened) {
      this.currentResult.menuOpened = true;
      this.menuOpenedDate = new Date();
    }
  }
}
