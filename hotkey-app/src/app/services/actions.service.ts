import { Injectable } from '@angular/core';

import { Menu } from '../models/menu';
import { MENUS } from '../models/mock-menus';

@Injectable()
export class ActionsService {

  constructor() { }

  getMenus(): Promise<Menu[]> {
    return Promise.resolve(MENUS);
  }
}
