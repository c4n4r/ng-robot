import {ComponentFactoryResolver, ComponentRef, Injectable, Type} from '@angular/core';
import {AnchorDirective} from '../directives/anchor.directive';
import {State} from '../model/State';
import {StateDrivenComponent} from '../components/state-driven/state-driven.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentFactoryHandlingService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  static checkIsStateDrivenComponent(componentRef: ComponentRef<any>): boolean{
    return componentRef.instance instanceof StateDrivenComponent;
  }

  mountComponent(state: State, host: AnchorDirective, payload?: object): ComponentRef<any> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(state.component);
    const viewContainerReference = host.viewContainerRef;
    viewContainerReference.clear();
    const componentRef = viewContainerReference.createComponent(componentFactory);
    if (!ComponentFactoryHandlingService.checkIsStateDrivenComponent(componentRef))
      throw new Error(' the component you try to mount is not State driven ');
    componentRef.instance.state = state;
    componentRef.instance.payload = payload;
    return componentRef;
  }





}
