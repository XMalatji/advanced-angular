import { Component } from '@angular/core';
import { ToggleProviderDirective } from './toggle.provider';

@Component({
  selector: 'toggle-on',
  template: '<ng-content *ngIf="toggleProvider.toggle.on"></ng-content>',
})
export class ToggleonComponent {
  constructor(public toggleProvider: ToggleProviderDirective) { }
}
