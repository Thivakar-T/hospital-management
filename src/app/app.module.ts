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
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { PatientformComponent } from './patientform/patientform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { HttpClientModule } from '@angular/common/http';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AppComponent,
    PatientformComponent,
    PatientlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgSelectModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    NgWizardModule.forRoot(ngWizardConfig)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
