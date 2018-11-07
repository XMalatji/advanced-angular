import { Component } from '@angular/core';
import { ToggleProviderDirective } from './toggle.provider';


@Component({
  selector: 'toggle-off',
  template: '<ng-content *ngIf="!toggleProvider.toggle.on"></ng-content>',
})
export class ToggleoffComponent {
  constructor(public toggleProvider: ToggleProviderDirective) { }
}
