import {Component, OnInit} from '@angular/core';
import {StateDrivenComponent} from 'robot';

@Component({
  selector: 'app-state-one',
  templateUrl: './state-one.component.html',
  styleUrls: ['./state-one.component.scss']
})
export class StateOneComponent extends StateDrivenComponent implements OnInit{

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  toStateTwo(){

    this.changeState('state two', {content: {name: 'hadrien', title: 'bite'}});

  }

}
