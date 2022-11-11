import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupform!: FormGroup
  Submitted = false;
  constructor(private fb: FormBuilder) {
    this.signupform = this.fb.group({
      PatientNo: ['', Validators.required],
      mobileNo: ['', Validators.required],
      AlternativeNo: ['', Validators.required],
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lName: ['', Validators.required],
      Email: ['', Validators.required],
      password: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      spouseName: ['', Validators.required],
      bloodgroup: ['', Validators.required],
      weight: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      gender: ['', Validators.required],
      postalCode: ['', Validators.required],
      cityId: ['', Validators.required],
      stateId: ['', Validators.required],
      countryId: ['', Validators.required],
      note: ['', Validators.required],
      age: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      
  })
   }

  ngOnInit(): void {
  }
  get f(){
    return this.signupform.controls
  }
  onSubmit() {
    this.Submitted =true;

}
}
