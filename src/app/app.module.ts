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
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { WorkersDetailsComponent } from './workers-details/workers-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientformComponent,
    PatientlistComponent,
    NavbarComponent,
    FooterComponent,
    WorkersDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatBadgeModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
