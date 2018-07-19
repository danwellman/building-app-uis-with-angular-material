import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss']
})
export class ExpanderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleOpened(): void {
    console.log('The panel was opened!');
  }

}
