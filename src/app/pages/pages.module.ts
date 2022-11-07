import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DoctorComponent } from './doctor/doctor.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
     DoctorComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
