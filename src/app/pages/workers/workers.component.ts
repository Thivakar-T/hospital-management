import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkersService } from './../../workers.service';


@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {
  workersform!: FormGroup;
  Submitted!:Boolean;
  paramId: any;
  obj: any = {};

  constructor(private fb: FormBuilder,
    private PatientService: WorkersService,
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
    return this.workersform.controls
  }
  submit() {
    alert("Submitted Sucessfully")
    this.Submitted = true;
    if (this.workersform.invalid) {
      return;
    }
    console.log(this.workersform.value)
    if (this.paramId) {
      this.workersform.value.id = this.paramId
      this.PatientService.updateLogin(this.workersform.value, this.paramId).subscribe(
        res => {
          alert("Edited sucessfully");
          console.log(res)
          this.router.navigate(['/workers-details']);
        })
    } else {
      this.PatientService.login(this.workersform.value).subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/workers-details']);
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
    this.workersform.reset();
  }

}