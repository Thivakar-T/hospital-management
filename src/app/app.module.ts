import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { PatientformComponent } from './patientform/patientform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './../layout/navbar/navbar.component';
import { FooterComponent } from './../layout/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkersDetailsComponent } from './workers-details/workers-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AboutComponent } from './about/about.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    PatientformComponent,
    PatientlistComponent,
    NavbarComponent,
    FooterComponent,
    WorkersDetailsComponent,
    AdminLoginComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatBadgeModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    NgbModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
