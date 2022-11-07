import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkersComponent } from '../pages/workers/workers.component';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { DoctorComponent } from './doctor/doctor.component';
import { BedManagementComponent } from './bed-management/bed-management.component';



const routes: Routes = [
  { path: "", component: WorkersComponent },
  { path: "workers", component: WorkersComponent },
  { path: "workers-list", component: WorkersListComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'bed-management', component: BedManagementComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
