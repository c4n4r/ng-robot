import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {StateChangeEvent, StateDrivenComponentInterface} from '../../model/StateDrivenComponent';
import {State, Transition} from '../../model/State';
import {state, transition} from '@angular/animations';

@Component({
  selector: 'lib-state-driven',
  templateUrl: './state-driven.component.html',
  styleUrls: ['./state-driven.component.css']
})
export class StateDrivenComponent implements OnInit, OnDestroy, StateDrivenComponentInterface {

  @Output()
  stateEnterEmitter: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  stateExitEmitter: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  changeStateEvent: EventEmitter<StateChangeEvent> = new EventEmitter<StateChangeEvent>();

  @Input()
  payload: object | null;

  @Input()
  state: State;

  ngOnInit(): void {
    this.stateEnterEmitter.emit();
    console.log('mon payload', this.payload);
  }

  ngOnDestroy(): void {
    this.stateExitEmitter.emit();
  }


  protected changeState(newState: string, payload: object) {
    if (!this.isTransitionValid(newState))
      throw new Error(`bad transtion, this state can transit to those states : ${JSON.stringify(this.state.transitions)}`);
    this.changeStateEvent.emit({
      previousState : this.state.name,
      newState,
      payload
    });
  }


  private isTransitionValid(transitionName: string): boolean {
    const found = this.state.transitions.find((trans: Transition) => {
      return trans.name === transitionName;
    });
    return !!found;
  }

}
