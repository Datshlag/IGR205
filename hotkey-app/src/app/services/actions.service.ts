import { Injectable } from '@angular/core';

import { Menu } from '../static/menu';
import { MENUS } from '../static/mock-menus';

@Injectable()
export class ActionsService {

  constructor() { }

  getMenus(): Promise<Menu[]> {
    return Promise.resolve(MENUS);
  }
}
