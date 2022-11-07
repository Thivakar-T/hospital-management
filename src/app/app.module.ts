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
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
<<<<<<< HEAD
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { PatientformComponent } from './patientform/patientform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { HttpClientModule } from '@angular/common/http';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};
=======
import { NavbarComponent } from './../layout/navbar/navbar.component';
import { FooterComponent } from './../layout/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';

>>>>>>> 862b2c122d6ee89d2be2558fbc1e80d13b65be62
>>>>>>> 43fbf58bbd377cb567b1fdeb7234b4ce26fc5de9

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
    PatientformComponent,
    PatientlistComponent
=======
    NavbarComponent,
    FooterComponent,
>>>>>>> 43fbf58bbd377cb567b1fdeb7234b4ce26fc5de9
  
>>>>>>> 862b2c122d6ee89d2be2558fbc1e80d13b65be62
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
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
<<<<<<< HEAD
    NgWizardModule.forRoot(ngWizardConfig)
=======
    MatToolbarModule,
    MatBadgeModule,
    
  
   
>>>>>>> 862b2c122d6ee89d2be2558fbc1e80d13b65be62
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
