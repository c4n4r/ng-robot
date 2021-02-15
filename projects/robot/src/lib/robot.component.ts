import {Component, ComponentFactoryResolver, ComponentRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {RobotData, State} from './core/model/State';
import {AnchorDirective} from './core/directives/anchor.directive';
import {ComponentFactoryHandlingService} from './core/services/component-factory-handling.service';
import {StateChangeEvent} from './core/model/StateDrivenComponent';

@Component({
  selector: 'lib-robot',
  templateUrl: 'robot.template.html',
  styles: [
  ]
})
export class RobotComponent implements OnInit {

  @Input()
  states: Array<State> = [];

  @Input()
  default: string = null;

  @Output()
  stateChangeEvent: EventEmitter<RobotData> = new EventEmitter<RobotData>();


  currentState: State;
  currentComponent: ComponentRef<any>;

  @ViewChild(AnchorDirective, {static: true}) stateHost: AnchorDirective;



  constructor( private componentFactoryHandler: ComponentFactoryHandlingService ) { }

  ngOnInit(): void {
    if (!this.default)
      this.default = this.states[0].name;
    if (!this.default)
      throw new Error('you need to define at least on state');
    this.currentState = this.findState(this.default);
    this.setupComponent(this.default);
  }

  private setupComponent(stateName: string, payload?: any){
    const state: State = this.findState(stateName);
    this.currentComponent = this.componentFactoryHandler.mountComponent(state, this.stateHost, payload);
    this.stateChangeEvent.emit({
      data: payload,
      previousState: this.currentState,
      nextState: state
    });
    this.currentState = state;
    this.currentComponent.instance.changeStateEvent.subscribe((event: StateChangeEvent) => {
      this.setupComponent(this.findState(event.newState).name, event.payload);
    });
  }

  private findState(name: string): State {
    return this.states.find((state: State) => {
      return state.name === name;
    });
  }

}
