import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DoctorComponent } from './doctor/doctor.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { WorkersTableComponent } from './workers-table/workers-table.component';
import { WorkersComponent } from './workers/workers.component';
import { BedTypeComponent } from './bed-type/bed-type.component';
import { BedTypeListComponent } from './bed-type-list/bed-type-list.component';

@NgModule({
  declarations: [
    DoctorComponent,
    WorkersListComponent,
    WorkersTableComponent,
    WorkersComponent,
    WorkersListComponent,
    BedTypeComponent,
    BedTypeListComponent,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  
  ],
  
})
export class PagesModule { }
