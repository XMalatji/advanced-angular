import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
import { TogglerDirective } from './toggler.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToggleComponent,
    TogglerDirective
 
  ],
  exports: [
    ToggleComponent,
    TogglerDirective
  ],

})
export class ToggleModule { }
