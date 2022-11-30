import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-patientform',
  templateUrl: './patientform.component.html',
  styleUrls: ['./patientform.component.scss']
})
export class PatientformComponent implements OnInit {

  patientform!: FormGroup;
  Submitted!: Boolean;
  paramId: any;
  obj: any = {};
  countryObj: any = {};
  stateObj: any = {};
  cityObj: any = {};
  country = [];
  state = [];
  city = [];
  stateId: any;
  cityId: any;
  patientobj: any = [];
  id: any;
  result: any;
  groups:any;
  gender:any;
  maritalstatus:any;
  title:any;
  
  constructor(private fb: FormBuilder,
    private PatientService: PatientService,
    private route: ActivatedRoute,
    private addressService: AddressService,
    private router: Router) { }

  ngOnInit(): void {
    this.patientform = this.fb.group({
      patientNo: ['', Validators.required],
      mobileNo: ['', Validators.required],
      alternativeMobileNo: ['', Validators.required],
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      spouseName: ['', Validators.required],
      bloodGroup: ['', Validators.required],
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
    this.getCountry();
    // this.getcity();
    // this.getstate();
    this.getpatienttype();
    this.paramId = this.route.snapshot.params['data'];
    if (this.paramId) {
      this.patientedit(this.paramId)
    }

    this.groups=[
      "A+","A-","B+","B-","O+","O-","AB+","AB-"
    ]
    this.gender=[
      "Male","Female","Others"
    ]
    this.maritalstatus=[
      "Married","UnMarried","Single"
    ]
    this.title=[
      "Mr","Mrs"
    ]
  }
  get f() {
    return this.patientform.controls
  }
  getCountry() {
    this.addressService.getCountry().subscribe(
      res => {
        console.log(res)
        this.countryObj = res;
        console.log(this.countryObj)
        this.country = this.countryObj.data;
        console.log(this.country)
      })
  }
  getstate(id: any) {
    this.addressService.getstateId(id).subscribe(
      res => {
        console.log(res)
        this.stateObj = res
        this.state = this.stateObj.data
      })
  }
  getcity(id: any) {
    this.addressService.getcityId(id).subscribe(
      res => {
        console.log(res)
        this.cityObj = res
        this.city = this.cityObj.data
      })
  }
  patientedit(id: any) {
    console.log(id);
    this.PatientService.editpatientid(id).subscribe((res) => {
      this.patientobj = res.data;
    });

  }
  
  submit() {
    alert("Submitted Sucessfully")
    this.Submitted = true;
    if (this.patientform.invalid) {
      return;
    }
    console.log(this.patientform.value)
    this.PatientService.createpatient(this.patientform.value).subscribe((res) => {
      this.router.navigate(['/patientlist']);
    })
  }
  getpatienttype() {
    this.PatientService.getbypatientlist().subscribe((res) => {
      console.log(res)
      this.obj = res
      this.obj = this.obj.data


    })
  }
  patientupdate() {
    console.log(this.patientform.value);
    if (this.patientobj.id) {
      console.log(this.patientobj.id);
      this.patientform.value.id = this.patientobj.id;
      this.PatientService.updatepatientid(this.patientform.value).subscribe((res) => {
        console.log(res);
        this.result = res;
        this.getpatienttype();
      });
    }
    else {
      console.log(this.patientform.value);
      this.Submitted = true;
      this.PatientService.createpatient(this.patientform.value).subscribe((res) => {
        console.log(res);
        this.result = res;
        this.getpatienttype();
        this.router.navigateByUrl('/patientlist');
      })

    }

  }

  resetForm() {
    this.patientform.reset();
  }


  changeCountry(event: any) {
    console.log(event.target.value);
    this.stateId = event.target.value;
    this.getstate(this.stateId);
  }
  changeState(event: any) {
    console.log(event.target.value);
    this.cityId = event.target.value;
    this.getcity(this.cityId);
  }

}
