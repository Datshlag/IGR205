import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { TestSessionService } from '../../services/test-session.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'app-session-display',
  templateUrl: './session-display.component.html',
  styleUrls: ['./session-display.component.css']
})

export class SessionDisplayComponent implements OnInit {

  @ViewChild('buttonClassic') buttonClassic: ElementRef;
  @ViewChild('buttonDisabled') buttonDisabled: ElementRef;
  @ViewChild('buttonAudio') buttonAudio: ElementRef;

  constructor(private testSessionService: TestSessionService) { }
  modeName: string = "classic";

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.testSessionService.hotkeyMode$.subscribe(next => {
        this.modeName = next;
        console.log(next);
        if(this.modeName == 'classic') {
          this.buttonClassic.nativeElement.click();
        }
        if(this.modeName == 'disabled') {
          this.buttonDisabled.nativeElement.click();
        }
        if(this.modeName == 'audio') {
          this.buttonAudio.nativeElement.click();
        }
    });
  }

  isStarted(): boolean {
    return this.testSessionService.isStarted;
  }

  isWaitingNext(): boolean {
    return this.testSessionService.waitingNext;
  }

  startSession(): void {
    this.testSessionService.startSession();
  }

  startNext(): void {
    this.testSessionService.startNext();
  }

  stopSession(): void {
    this.testSessionService.stopSession();
  }

  currentMode(): string {
    return this.modeName;
  }
}
;