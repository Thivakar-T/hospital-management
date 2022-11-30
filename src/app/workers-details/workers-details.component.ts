import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { WorkersService } from '../workers.service';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-workers-details',
  templateUrl: './workers-details.component.html',
  styleUrls: ['./workers-details.component.scss']
})
export class WorkersDetailsComponent implements OnInit {

  product: any
  country: any
  array!: [];
  paramid: any;
  obj: any = [];
  result: any;
  master: any = [];
  masterid: any;
  workobj: any = [];
  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
    private service: WorkersService,
    private addressService: AddressService
  ) { }

  ngOnInit(): void {
    this.getCountry()
    this.getworkertype()
  }
  getCountry() {
    this.addressService.getCountry().subscribe(
      res => {
        console.log(res)
        this.product = res
      })
  }
  getworkertype() {
    this.service.getbyworkerlist().subscribe((res) => {
      console.log(res)
      this.obj = res
      this.obj = this.obj.data
      console.log(this.obj);

    })

  }
  
  reject(id: any) {
    this.service.deleteworker(id).subscribe((res) => {
      console.log(res)
      this.getworkertype();
      this.result = res;
    })

  }
}
