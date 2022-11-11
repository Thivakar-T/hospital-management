import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-bed-type-list',
  templateUrl: './bed-type-list.component.html',
  styleUrls: ['./bed-type-list.component.scss']
})
export class BedTypeListComponent implements OnInit {

  signupForm!: FormGroup;

  status: any = ["Manual", "Semi-Electric", "fully-electric"]
  constructor(private formBuilder: FormBuilder, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      Status: ['', [Validators.required,]],
      Admission: ['', [Validators.required,]],
      Discharge: ['', [Validators.required,]],
      Description: ['', [Validators.required,]],
      BedStatus: ['', [Validators.required,]],
      Cost: ['', [Validators.required,]],

    });

  };

}
