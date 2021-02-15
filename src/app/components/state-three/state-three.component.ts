import { Component, OnInit } from '@angular/core';
import {StateDrivenComponent} from 'robot';

@Component({
  selector: 'app-state-three',
  templateUrl: './state-three.component.html',
  styleUrls: ['./state-three.component.scss']
})
export class StateThreeComponent extends StateDrivenComponent implements OnInit{

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
