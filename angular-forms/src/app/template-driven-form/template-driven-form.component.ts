import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('userDetailForm', { static: true }) signUpForm: NgForm;
  defaultUsername = "harry";
  defaultEmail = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(signUpForm: NgForm) {
    console.log(signUpForm);

    // Set form value 
    let setDetails = {
      username: 'harry',
      email: 'harry@yahoo.com',
      password: '',
      gender: 'male'
    };
    this.signUpForm.setValue(setDetails);

    // Patch form value
    let patchDetails = {
      email: 'harry@yahoo.com',
      gender: 'male'
    };
    this.signUpForm.form.patchValue(patchDetails);


    // Reset form
    // this.signUpForm.reset();
  }

}
