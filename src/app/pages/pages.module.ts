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
import { WorkersTableComponent } from './workers-table/workers-table.component';
import { WorkersComponent } from './workers/workers.component';


@NgModule({
  declarations: [
    DoctorComponent,
    WorkersListComponent,
    WorkersTableComponent,
    WorkersComponent
   
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule
    // MatPaginator,
    // MatTableDataSource
    
  ]
})
export class PagesModule { }
