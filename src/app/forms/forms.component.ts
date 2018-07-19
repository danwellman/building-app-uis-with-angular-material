import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  @ViewChild('simplePicker') picker: MatDatepicker<Date>;

  public options: Array<object>;

  constructor() { }

  ngOnInit(): void {
    this.options = [
      { value: 1, viewValue: 'Option 1' },
      { value: 2, viewValue: 'Option 2' },
      { value: 3, viewValue: 'Option 3' }
    ];
  }

  showPicker(): void {
    this.picker.open();
  }

  sliderChange(event): void {
    console.log(event);
  }

  slideToggle(event): void {
    console.log(event);
  }

  handleSelect(event): void {
    console.log(event);
  }

}
