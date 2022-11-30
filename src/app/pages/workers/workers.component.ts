import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkersService } from './../../workers.service';
import { AddressService } from 'src/app/address.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {
  workersform!: FormGroup;
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
  workobj: any = [];

  constructor(private fb: FormBuilder,
    private workerservice: WorkersService,
    private addressservice: AddressService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.workersform = this.fb.group({
      receptionistNo: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      certificateFileName: ['', Validators.required],
      countryId: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      name: ['', Validators.required],
      hospitalName: ['', Validators.required],
      description: ['', Validators.required],
      cerificatePhotoFileName: ['', Validators.required],
      stateId: ['', Validators.required],
      temporaryAddress: ['', Validators.required],
      phoneNo: ['', Validators.required],
      age: ['', Validators.required],
      password: ['', Validators.required],
      qualification: ['', Validators.required],
      cityId: ['', Validators.required],
    })
    this.getCountry();
    // this.getcity();
    // this.getstate();
    this.getworkertype();
    this.paramId = this.route.snapshot.params['data'];
    if (this.paramId) {
      this.workeredit(this.paramId)
    }
  }

  get f() {
    return this.workersform.controls
  }
  getCountry() {
    this.addressservice.getCountry().subscribe(
      res => {
        console.log(res)
        this.countryObj = res;
        console.log(this.countryObj)
        this.country = this.countryObj.data;
        console.log(this.country)
      })
  }
  workeredit(id: any) {
    console.log(id);
    this.workerservice.editworkerid(id).subscribe((res) => {
      this.workobj = res.data;
    });



  }
  getcity(id: any) {
    this.addressservice.getcityId(id).subscribe(
      res => {
        console.log(res)
        this.cityObj = res
        this.city = this.cityObj.data
      })
  }
  getstate(id: any) {
    this.addressservice.getstateId(id).subscribe(
      res => {
        console.log(res)
        this.stateObj = res
        this.state = this.stateObj.data
      })
  }
  submit() {
    alert("Submitted Sucessfully")
    this.Submitted = true;
    if (this.workersform.invalid) {
      return;
    }
    console.log(this.workersform.value)
    this.workerservice.createworker(this.workersform.value).subscribe((res) => {
      this.router.navigate(['/workers-details']);
    })
  }
  getworkertype() {
    this.workerservice.getbyworkerlist().subscribe((res) => {
      console.log(res)
      this.obj = res
      this.obj = this.obj.data


    })
  }

  resetForm() {
    this.workersform.reset();
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