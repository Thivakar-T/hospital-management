import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { PatientService } from '../patient.service';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.scss']
})
export class PatientlistComponent implements OnInit {

  product: any;
  paramid: any;
  obj: any = [];
  result: any;
  patientobj: any = [];

  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
    private service: PatientService,
    private addressService: AddressService

  ) { }

  ngOnInit(): void {
    this.getCountry()
    this.getpatienttype()
  }
  getCountry() {
    this.addressService.getCountry().subscribe(
      res => {
        console.log(res)
        this.product = res
      })
  }
  
  
  getpatienttype() {
    this.service.getbypatientlist().subscribe((res) => {
      console.log(res)
      this.obj = res
      this.obj = this.obj.data
      console.log(this.obj);
    })
  }
  reject(id: any) {
    this.service.deletepatient(id).subscribe((res) => {
      console.log(res)
      this.getpatienttype();
      this.result = res;
    })

  }

}
