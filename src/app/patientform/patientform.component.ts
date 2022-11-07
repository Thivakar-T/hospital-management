import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patientform',
  templateUrl: './patientform.component.html',
  styleUrls: ['./patientform.component.scss']
})
export class PatientformComponent implements OnInit {

  signupForm!: FormGroup;
  Submitted!:Boolean;
  


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
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
  get f() {
    return this.signupForm.controls
  }
  submit() {
    alert("Submitted Sucessfully")
    this.Submitted = true;
    
    console.log(this.signupForm.value)
    

  }

}
