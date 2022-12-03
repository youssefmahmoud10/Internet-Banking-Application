import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInformationBodyComponent } from './account-information-body/account-information-body.component';
import { FullLoginComponent } from './full-login/full-login.component';
import { FullRegisterComponent } from './full-register/full-register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MakeTransactionComponent } from './make-transaction/make-transaction.component';
import { PersonalInformationBodyComponent } from './personal-information-body/personal-information-body.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ViewTransactionsBodyComponent } from './view-transactions-body/view-transactions-body.component';


const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:"all-login", component:FullLoginComponent},
  {path:"all-register", component:FullRegisterComponent},
  {
    path: 'profile',
    component: PersonalInformationComponent,
    children: [
      {path: 'personal', component: PersonalInformationBodyComponent},
      {path: 'account', component: AccountInformationBodyComponent},
      {path: 'transaction', component: ViewTransactionsBodyComponent},
      {path: 'make-transaction', component: MakeTransactionComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
