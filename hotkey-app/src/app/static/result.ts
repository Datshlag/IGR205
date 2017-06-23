export class Result {
  time: number; // Time taken to give the good answer
  actionId: number; // The answer given by the user
  sessionId: number; // Number given by the server to identify session
  correctAnswer: boolean // Wether it was the requested action by the test
  hotkeyUsed: boolean; // Wether the action was clicked or hotkey was used
  menuOpened: boolean; // Wether user opened the menu
  menuDelay: number; // Time between first menu open and answer

  constructor() {
    this.time = undefined;
    this.actionId = undefined;
    this.sessionId = undefined;
    this.correctAnswer = undefined;
    this.hotkeyUsed = false;
    this.menuOpened = false;
    this.menuDelay = undefined;
  }
}

// Ideas
// Mouse travel distance
