import { Injectable } from '@angular/core';

import { Action } from '../models/action';
import { ACTIONS } from '../models/mock-actions';

@Injectable()
export class ActionsService {

  constructor() { }

  getActions(): Promise<Action[]> {
    return Promise.resolve(ACTIONS);
  }
}
