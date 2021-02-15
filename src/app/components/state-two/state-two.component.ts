import { Component, OnInit } from '@angular/core';
import {StateDrivenComponent} from 'robot';

@Component({
  selector: 'app-state-two',
  templateUrl: './state-two.component.html',
  styleUrls: ['./state-two.component.scss']
})
export class StateTwoComponent extends StateDrivenComponent{

  constructor() {
    super();
  }


  goToStateThree() {
    this.changeState('state three', {test: 'tres bien !! '});
  }
}
