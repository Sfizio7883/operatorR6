import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { OperatorListComponent } from './operator-list/operator-list.component';
import { SingleOperatorComponent } from './operator-list/single-operator/single-operator.component';
import { OperatorFormComponent } from './operator-list/operator-form/operator-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { OperatorsService } from './services/operators.service';
import { AuthGuardService } from './services/auth-guard.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    OperatorListComponent,
    SingleOperatorComponent,
    OperatorFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    OperatorsService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
