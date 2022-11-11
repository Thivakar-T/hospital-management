import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup
  Submitted = false;
  constructor(private fb: FormBuilder,
    private service: AuthService) { 
    this.loginform = this.fb.group({
      userName: ['',Validators.required],
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
    console.log(this.loginform.value);
    this.service.Login(this.loginform.value).subscribe(
      (response: any) => {
        console.log(response);
        localStorage.setItem('currentUser', JSON.stringify(response));
        localStorage.setItem('token', response.data.jwt);
        localStorage.setItem('role', response.data.role);
      },
      (error)=>{
        console.log(error);

        
      }
    )
    

}

}
