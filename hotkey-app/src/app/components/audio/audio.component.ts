import { Component, OnInit, Input } from '@angular/core';
import { Action } from '../../static/action'
import { TestSessionService } from '../../services/test-session.service'

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  @Input() action: Action;

  constructor(private testSessionService: TestSessionService) { }

  ngOnInit() {
  }

  onClick(action: Action): void {
    if(this.testSessionService.readyForAnswer()) {
         // Play audio
         if(action.audioUrl) {
          let audio_main = new Audio(action.audioUrl);
          audio_main.onended = function() {
            setTimeout(function(){

              let audio_modifier = new Audio("assets/sounds/modifiers/" + action.modifier + ".mp3");
              audio_modifier.onended = function(){

                  let audio_shortcut = new Audio("assets/sounds/shortcuts/" + action.shortcut + ".mp3");
                  audio_shortcut.play();
              }
              audio_modifier.play();
            }, 100);
          }
          audio_main.play();
         } else
           console.log("No audio file for this action");
         // Send answer
         this.testSessionService.answer(action);
       }
  }
}
