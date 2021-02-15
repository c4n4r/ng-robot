import { Component } from '@angular/core';
import {State} from '../../dist/robot/lib/core/model/State';
import {StateOneComponent} from './components/state-one/state-one.component';
import {StateTwoComponent} from './components/state-two/state-two.component';
import {StateThreeComponent} from './components/state-three/state-three.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-robot';

  States: Array<State> = [
    {
      component: StateOneComponent,
      name: 'state one',
      transitions: [{name: 'state two'}]
    },
    {
      component: StateTwoComponent,
      name: 'state two',
      transitions: [{name: 'state three'}]
    },
    {
      component: StateThreeComponent,
      name: 'state three',
      transitions: [{name: 'state one'}]
    }
  ];
  }
