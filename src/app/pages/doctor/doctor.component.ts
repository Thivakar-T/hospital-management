import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  loginform!: FormGroup;
  Submitted!: Boolean;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      DoctorNo: ['', Validators.required],
      PhoneNo: ['', Validators.required],
      Qualification: ['', Validators.required],
      Title: ['', Validators.required],
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      FatherName: ['', Validators.required],
      Designation: ['', Validators.required],
      Specialist: ['', Validators.required],
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
      Certificate: ['', Validators.required],
      Photo: ['', Validators.required],
    })
  }
  get f() {
    return this.loginform.controls
  }
  submit() {
    this.Submitted = true;

    console.log(this.loginform.value)

  }

}











