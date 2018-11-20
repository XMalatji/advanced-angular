import { Component, OnInit, Input, Output, EventEmitter, ContentChild, AfterContentInit, Directive, TemplateRef } from '@angular/core';

@Component({
  exportAs: 'toggle',
  selector: 'toggle , [toggle]',
  template: `<ng-container *ngTemplateOutlet="layoutTemp; context: { on: on, fns: {toggle: toggle} }"></ng-container>`
})
export class ToggleComponent implements OnInit {

  @Input() on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(TemplateRef) layoutTemp: TemplateRef<any>;

  ngOnInit() {
  }

  setOnState(on: boolean): any {
    this.on = on;
    this.toggled.emit(this.on);
  }
  toggle = () => {
    this.setOnState(!this.on);
  }

}
