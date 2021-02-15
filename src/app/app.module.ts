import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RobotModule} from 'robot';
import { StateOneComponent } from './components/state-one/state-one.component';
import { StateTwoComponent } from './components/state-two/state-two.component';
import { StateThreeComponent } from './components/state-three/state-three.component';

@NgModule({
  declarations: [
    AppComponent,
    StateOneComponent,
    StateTwoComponent,
    StateThreeComponent
  ],
  imports: [
    BrowserModule,
    RobotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
