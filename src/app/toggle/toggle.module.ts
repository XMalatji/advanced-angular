import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleonComponent } from './toggleon.component';
import { ToggleoffComponent } from './toggleoff.component';
import { ToggleButtonComponent } from './toggle.button.component';
import { SwitchComponent } from '../switch/switch.component';
import { ToggleDirective } from './toggle.directive';
import { ToggleProviderDirective } from './toggle.provider';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToggleDirective,
    ToggleProviderDirective,
    ToggleonComponent,
    ToggleoffComponent,
    ToggleButtonComponent,
    SwitchComponent
  ],
  exports: [
    ToggleDirective,
    ToggleProviderDirective,
    ToggleonComponent,
    ToggleoffComponent,
    ToggleButtonComponent,

  ],

})
export class ToggleModule { }
