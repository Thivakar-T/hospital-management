import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/account/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginform!: FormGroup
  Submitted = false;
  constructor(private fb: FormBuilder,
    private router: Router,
    private service: AuthService
  ) {
    this.loginform = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  ngOnInit(): void {
  }

  get f() {
    return this.loginform.controls
  }
  onSubmit() {
    this.Submitted = true;
    console.log(this.loginform.value);
    this.service.Login(this.loginform.value).subscribe(
      (response: any) => {
        console.log(response);
        localStorage.setItem('currentUser', JSON.stringify(response));
        localStorage.setItem('token', response.data.jwt);
        localStorage.setItem('role', response.data.role);
        this.router.navigate(["/home"])
      },
      (error) => {
        console.log(error);


      }
    )


  }

}
