import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  @Input() on: boolean;
  @Input() className: string;
  constructor() { }

  ngOnInit() {
  }

}
