import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { WorkersListComponent } from './workers-list/workers-list.component';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { DoctorComponent } from './doctor/doctor.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
     DoctorComponent
import { AdmissionListComponent } from './admission-list/admission-list.component';
import { BedManagementComponent } from './bed-management/bed-management.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    DoctorComponent,
    BedManagementComponent,
    AdmissionListComponent,
    WorkersListComponent,
   
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    // MatPaginator,
    // MatTableDataSource
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class PagesModule { }
