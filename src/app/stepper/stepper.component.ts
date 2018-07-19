import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  public user: FormGroup;

  constructor(private fb: FormBuilder) { }

  get userDetails(): FormArray {
    return this.user.get('userDetails') as FormArray;
  }

  ngOnInit(): void {
    this.user = this.fb.group({
      userDetails: this.fb.array([])
    });

    this.userDetails.push(this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    }));
    this.userDetails.push(this.fb.group({
      opt1: '',
      opt2: ''
    }));
  }

  submitForm(): void {
    console.log(this.userDetails.value);
  }

}
