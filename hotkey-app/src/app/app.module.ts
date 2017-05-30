import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { TraditionnalDesignComponent } from './components/traditionnal-design/traditionnal-design.component';
import { ActionComponent } from './components/action/action.component';

import { ActionsService } from './services/actions.service';
import { NavbarComponent } from './components/navbar/navbar.component'

const appRoutes = [
    { path: 'traditionnal', component: TraditionnalDesignComponent },
    { path: '', redirectTo:'traditionnal', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    TraditionnalDesignComponent,
    ActionComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ActionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
