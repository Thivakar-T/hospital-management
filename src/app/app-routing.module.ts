import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientformComponent } from './patientform/patientform.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { WorkersDetailsComponent } from './workers-details/workers-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./../account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {path:'patientform',component:PatientformComponent},
  {path:'patientform/:data',component:PatientformComponent},
  {path:'patientlist',component:PatientlistComponent},
  {path:'workers-details',component:WorkersDetailsComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
