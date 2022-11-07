import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFilter } from '../interfaces/ifilter';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() filterIn!: IFilter;
  @Output() filterOut = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onFilterSelect() {
    this.filterOut.emit();
  }
}
