import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patientform',
  templateUrl: './patientform.component.html',
  styleUrls: ['./patientform.component.scss']
})
export class PatientformComponent implements OnInit {

  patientform!: FormGroup;
  Submitted!:Boolean;
  paramId: any;
  obj: any = {};


  constructor(private fb: FormBuilder,
    private PatientService: PatientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.patientform = this.fb.group({
      patientNo: ['', Validators.required],
      mobileNo: ['', Validators.required],
      AlternativeNo: ['', Validators.required],
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lName: ['', Validators.required],
      email: ['', Validators.required],
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
    this.PatientService.getLogin().subscribe(
      res => {
        console.log(res)
      })
    this.paramId = this.route.snapshot.params['data'];
    if (this.paramId) {
      this.getId();
    }
    
  }
  get f() {
    return this.patientform.controls
  }
  submit() {
    alert("Submitted Sucessfully")
    this.Submitted = true;
    if (this.patientform.invalid) {
      return;
    }
    console.log(this.patientform.value)
    if (this.paramId) {
      this.patientform.value.id = this.paramId
      this.PatientService.updateLogin(this.patientform.value, this.paramId).subscribe(
        res => {
          alert("Edited sucessfully");
          console.log(res)
          this.router.navigate(['/patientlist']);
        })
    } else {
      this.PatientService.login(this.patientform.value).subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/patientlist']);
        })
    }

  }
  getId() {
    this.PatientService.getidData(this.paramId).subscribe(
      res => {
        console.log(res)
        this.obj = res
      })
  }

  resetForm() {
    this.patientform.reset();
  }

}
