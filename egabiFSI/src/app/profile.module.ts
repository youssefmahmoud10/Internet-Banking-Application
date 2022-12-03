import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { PersonalInformationBodyComponent } from './personal-information-body/personal-information-body.component';
// import { AccountInformationBodyComponent } from './account-information-body/account-information-body.component';
import { ViewTransactionsBodyComponent } from './view-transactions-body/view-transactions-body.component';
import { MakeTransactionComponent } from './make-transaction/make-transaction.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    PersonalInformationComponent,
    PersonalInformationBodyComponent,
    // AccountInformationBodyComponent,
    ViewTransactionsBodyComponent,
    SideBarComponent,
    MakeTransactionComponent,
  ],
  exports: [],
})
export class Routing {}

@NgModule({
  imports: [CommonModule, Routing],
})
export class ProfileModule {}
