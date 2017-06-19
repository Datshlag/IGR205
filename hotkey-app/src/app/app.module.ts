import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ActionsService } from './services/actions.service';
import { TestSessionService } from './services/test-session.service';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menubar/menubar.component';
import { ActionComponent } from './components/action/action.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { SessionDisplayComponent } from './components/session-display/session-display.component';
import { ClassicComponent } from './components/classic/classic.component';
import { DisabledComponent } from './components/disabled/disabled.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ActionComponent,
    NavbarComponent,
    SessionDisplayComponent,
    ClassicComponent,
    DisabledComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    ActionsService,
    TestSessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
