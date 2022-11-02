import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';

const routes: Routes = [
  {path:"",component:PatientComponent},
  {path:"patient",component:PatientComponent},
  {path:"patientlist",component:PatientListComponent},
  {path:"",component:DoctorsComponent},
  {path:"doctors",component:DoctorsComponent},
  {path:"doctors-list",component:DoctorsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
