import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FullLoginComponent } from './full-login/full-login.component';
import { FullRegisterComponent } from './full-register/full-register.component';
import { PersonalInformationBodyComponent } from './personal-information-body/personal-information-body.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SecondNavComponent } from './second-nav/second-nav.component';
import { MakeTransactionComponent } from './make-transaction/make-transaction.component';
import { AccountInformationBodyComponent } from './account-information-body/account-information-body.component';
import { ViewTransactionsBodyComponent } from './view-transactions-body/view-transactions-body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeBodyComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    FullLoginComponent,
    FullRegisterComponent,
    AccountInformationBodyComponent,
    ViewTransactionsBodyComponent,
    PersonalInformationBodyComponent,
    PersonalInformationComponent,
    SideBarComponent,
    MakeTransactionComponent,
    SecondNavComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule , 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
