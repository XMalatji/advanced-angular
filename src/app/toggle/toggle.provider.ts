import { Directive, Host, SimpleChange, SimpleChanges, Input, OnChanges, Optional } from '@angular/core';
import { ToggleDirective } from './toggle.directive';


@Directive({
  exportAs: 'toggleProvider',
  selector: 'toggle , [toggle], [toggleProvider]'
})
export class ToggleProviderDirective implements OnChanges  {
  toggle: ToggleDirective = this.toggleDirective;
  @Input() toggleProvider : ToggleDirective;
  constructor(@Host() @Optional() private toggleDirective: ToggleDirective){

  }

  ngOnChanges(changes: SimpleChanges){
    const { toggleProvider } = changes;
    if(toggleProvider){
      this.toggle = this.toggleProvider || this.toggleDirective;
    }
  }
}
