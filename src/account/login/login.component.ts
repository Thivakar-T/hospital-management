import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup
  Submitted = false;
  constructor(private fb: FormBuilder) { 
    this.loginform = this.fb.group({
      pNumber: ['',Validators.required],
      password: ['' ,Validators.required],
      
  })
  }

  ngOnInit(): void {
  }
  
  get f(){
    return this.loginform.controls
  }
  onSubmit() {
    this.Submitted =true;

}

}
