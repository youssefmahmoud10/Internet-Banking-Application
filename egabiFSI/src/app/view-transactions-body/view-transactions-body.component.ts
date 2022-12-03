import { Component } from '@angular/core';
import { GetTransactionService } from '../get-transaction.service';
import { GetProfileService } from '../get-profile.service';
import { Profile } from '../personal-information-body/personal-information-body.component';

@Component({
  selector: 'app-view-transactions-body',
  templateUrl: './view-transactions-body.component.html',
  styleUrls: ['./view-transactions-body.component.css']
})
export class ViewTransactionsBodyComponent {
  
  transactions!:Transaction[];
  isLoaded: boolean = false;
  profile!:Profile;

  constructor(private getTransactionService:GetTransactionService, private getProfileService:GetProfileService)
  {
    this.getProfileService.getProfileData(sessionStorage.getItem('accountNusmber')).subscribe((res:Profile) => {
      this.profile = res;
      this.isLoaded = true;
    });

    this.getTransactionService.getTransactionData(sessionStorage.getItem('accountNusmber')).subscribe((res:Transaction[]) => {
      this.transactions = res;
    }); 
  }

}

export interface Transaction {
  transactionId:number;
	amount:number;	
	date:String;	
	transactionType:String;	
	receiver:String;	
	accountNumber:String;	
}