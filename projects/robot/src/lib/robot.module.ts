import { NgModule } from '@angular/core';
import { RobotComponent } from './robot.component';
import {StateDrivenComponent} from './core/components/state-driven/state-driven.component';
import { AnchorDirective } from './core/directives/anchor.directive';



@NgModule({
  declarations: [RobotComponent, StateDrivenComponent, AnchorDirective],
  imports: [
  ],
  exports: [RobotComponent, StateDrivenComponent]
})
export class RobotModule { }
