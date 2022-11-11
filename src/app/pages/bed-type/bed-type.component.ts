import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-bed-type',
  templateUrl: './bed-type.component.html',
  styleUrls: ['./bed-type.component.scss']
})
export class BedTypeComponent implements OnInit {

  bedform!:FormGroup;
  
  status:any=["ACTIVE","IN-ACTIVE"]
    constructor(private formBuilder: FormBuilder) { }
  
   ngOnInit(): void {
    this.bedform = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.pattern('[a-zA-Z]+')]],
      Description: ['', [Validators.required,]],
      Status: ['', [Validators.required,]],
   
    });
  }
 

}

