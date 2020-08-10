import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NavComponent } from './components/nav/nav.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { AlertComponent } from './modals/alert/alert.component';








@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegistrationComponent,
    LoginComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent},
      {path: 'registration', component : RegistrationComponent},
      {path: 'login', component : LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
