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


@NgModule({
  declarations: [
    WorkersListComponent
    
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
