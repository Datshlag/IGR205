import { Menu } from './menu';
import { ACTIONS } from './mock-actions';

export const MENUS: Menu[] = [
  {name: "Menu1", actions: [ACTIONS[0], ACTIONS[2]]},
  {name: "Menu2", actions: [ACTIONS[1], ACTIONS[3], ACTIONS[4]]}
];
