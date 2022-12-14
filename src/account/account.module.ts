import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ConsultancyComponent } from './consultancy/consultancy.component';



@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ConsultancyComponent
   
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ]
})
export class AccountModule { }
