import { Component, OnInit, Input, Output, EventEmitter, ContentChild, AfterContentInit, Directive } from '@angular/core';
import { ToggleonComponent } from './toggleon.component';
import { ToggleoffComponent } from './toggleoff.component';
import { ToggleButtonComponent } from './toggle.button.component';

@Directive({
  exportAs: 'toggle',
  selector: 'toggle , [toggle]'
})
export class ToggleDirective implements OnInit {
  setOnState(on: boolean): any {
    this.on = on;
    this.toggled.emit(this.on);
  }
  @Input() on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();


  ngOnInit() {
  }

  // ngAfterContentInit(){
  //   this.toggleButton.toggled.subscribe(on => {
  //     this.on = on;
  //     this.toggled.emit(on);
  //     this.toggleOn.on = on;
  //     this.toggleOff.on = on;
  //   })
  // }

}
