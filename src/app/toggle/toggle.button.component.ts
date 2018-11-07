import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToggleDirective } from './toggle.directive';
import { ToggleProviderDirective } from './toggle.provider';

@Component({
  selector: 'toggle-button',
  template: '<switch [on]="toggleProvider.toggle.on" (click)="onClick()" ></switch>',
})
export class ToggleButtonComponent  {
  constructor(public toggleProvider: ToggleProviderDirective){

  }
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  onClick() {

    this.toggleProvider.toggle.setOnState(!this.toggleProvider.toggle.on);

    this.toggled.emit(this.toggleProvider.toggle.on);
  }


}
