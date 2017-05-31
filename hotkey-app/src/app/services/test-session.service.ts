import { Injectable } from '@angular/core';
import { Action } from '../models/action';

@Injectable()
export class TestSessionService {
  isStarted: boolean = false;
  actionSet: Action[];
  currentTime: number = 0;
  currentAction: number = 0;

  constructor() { }

  startSession(): void {
    this.isStarted = true;
  }
}
