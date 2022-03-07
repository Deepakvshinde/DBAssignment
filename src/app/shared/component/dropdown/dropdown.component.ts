import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { DropdownValue } from '../../models/dropdownvalue.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent  {
  @Input() values: any[] = [];
  @Input() label?: string;
  @Input() isDisabled?: boolean;
  @Output() valueChange = new EventEmitter<any>();

  selectedValue(value: string) {
    const valueRes = {
      value: value,
      type: this.label
    }
    this.valueChange.emit(valueRes);
  }

}
