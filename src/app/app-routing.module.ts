import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientformComponent } from './patientform/patientform.component';
import { PatientlistComponent } from './patientlist/patientlist.component';


const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {path:'',component:PatientformComponent},
  {path:'patientform',component:PatientformComponent},
  {path:'patientform/:data',component:PatientformComponent},
  {path:'patientlist',component:PatientlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
