import {Type} from '@angular/core';

export interface State {
  name: string;
  component: Type<any> ;
  transitions: Array<Transition>;
}

export interface Transition{
  name: string;
}

export interface RobotData{
  previousState?: State;
  nextState: State;
  data: any;
}
