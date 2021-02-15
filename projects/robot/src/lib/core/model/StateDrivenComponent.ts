import {State} from './State';
import {EventEmitter} from '@angular/core';

export interface StateDrivenComponentInterface {
  stateEnterEmitter: EventEmitter<any>;
  stateExitEmitter: EventEmitter<any>;
  changeStateEvent: EventEmitter<StateChangeEvent>;
  state: State;
  payload: object;
}

export interface StateChangeEvent {
  previousState: string;
  newState: string;
  payload: object;
}
