import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DoctorComponent } from './doctor/doctor.component';

import { AdmissionListComponent } from './admission-list/admission-list.component';

@NgModule({
  declarations: [
    DoctorComponent,
  
    AdmissionListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
