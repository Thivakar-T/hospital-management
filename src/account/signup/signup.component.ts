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
      MobileNo: ['', Validators.required],
      AlternativeNo: ['', Validators.required],
      Title: ['', Validators.required],
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      FatherName: ['', Validators.required],
      MotherName: ['', Validators.required],
      SpouseName: ['', Validators.required],
      BloodGroup: ['', Validators.required],
      Weight: ['', Validators.required],
      Adress1: ['', Validators.required],
      Adress2: ['', Validators.required],
      gender: ['', Validators.required],
      Portal: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Country: ['', Validators.required],
      Note: ['', Validators.required],
      Age: ['', Validators.required],
      Marital: ['', Validators.required],
      
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
