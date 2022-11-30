import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkersComponent } from '../pages/workers/workers.component';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { DoctorComponent } from './doctor/doctor.component';
import { WorkersTableComponent } from './workers-table/workers-table.component';
import { BedTypeComponent } from './bed-type/bed-type.component';
import { BedTypeListComponent } from './bed-type-list/bed-type-list.component';



const routes: Routes = [
  { path: "", component: WorkersComponent },
  { path: "workers", component: WorkersComponent },
  { path: "workers/:data", component: WorkersComponent },
  { path: "workers-list", component: WorkersListComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: "workers-table", component: WorkersTableComponent },
  { path: 'bed-type', component: BedTypeComponent },
  { path: 'bed-type-list', component: BedTypeListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
