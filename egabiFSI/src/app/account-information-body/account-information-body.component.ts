import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GetAccountService } from '../get-account.service';
import { GetProfileService } from '../get-profile.service';
import { Profile } from '../personal-information-body/personal-information-body.component';
@Component({
  selector: 'app-account-information-body',
  templateUrl: './account-information-body.component.html',
  styleUrls: ['./account-information-body.component.css'],
})
export class AccountInformationBodyComponent {
  account!: Account;
  isLoaded: boolean = false;
  profile!: Profile;

  constructor(
    private getAccountService: GetAccountService,
    private getProfileService: GetProfileService
  ) {
    this.getProfileService
      .getProfileData(sessionStorage.getItem('accountNusmber'))
      .subscribe((res: Profile) => {
        this.profile = res;
        this.isLoaded = true;
      });

    this.getAccountService
      .getAccountData(sessionStorage.getItem('accountNusmber'))
      .subscribe((res: Account) => {
        this.account = res;
        this.isLoaded = true;
      });
  }
}

export interface Account {
  accountNumber: String;
  currency: String;
  type: String;
  balance: String;
  userNid: String;
  hasIb: String;
  password: String;
}
