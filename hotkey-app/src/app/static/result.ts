export class Result {
  time: number; // Time taken to give the good answer
  hotkeyUsed: boolean; // Wether the action was clicked or hotkey was used
  errorCount: number; // Number of wrong answers
  menuOpened: boolean; // Wether user opened the menu
  menuDelay: number; // Time between first menu open and answer

  constructor() {
    this.time = undefined;
    this.hotkeyUsed = false;
    this.errorCount = 0;
    this.menuOpened = false;
    this.menuDelay = undefined;
  }
}

// Ideas
// Mouse travel distance
