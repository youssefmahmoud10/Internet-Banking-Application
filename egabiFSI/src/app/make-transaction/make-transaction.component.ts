import { Component } from '@angular/core';
import { MakeTransactionService } from '../make-transaction.service';

@Component({
  selector: 'app-make-transaction',
  templateUrl: './make-transaction.component.html',
  styleUrls: ['./make-transaction.component.css']
})
export class MakeTransactionComponent {

  amount!:number;
	transactionType:String=""
	receiver:String=""
  noBalance!:number
  successPayment!:number
  successTransfer!:number
  accountNotFound!:number

  constructor(private makeTransactionService:MakeTransactionService)
  {
    
  }

  makeTransaction(): void {
    this.makeTransactionService.makeTransaction(this.amount, new Date().toLocaleDateString(), this.transactionType, this.receiver, sessionStorage.getItem('accountNusmber')).subscribe((res:number) => {
      if(res==0){
        this.successPayment=0;
        this.successTransfer=0;
        this.accountNotFound=0;
        this.noBalance=1;
      }
      if(res==1){
        this.successPayment=1;
        this.successTransfer=0;
        this.accountNotFound=0;
        this.noBalance=0;
      }
      if(res==2){
        this.successPayment=0;
        this.successTransfer=1;
        this.accountNotFound=0;
        this.noBalance=0;
      }
      if(res==4){
        this.successPayment=0;
        this.successTransfer=0;
        this.accountNotFound=1;
        this.noBalance=0;
      }
    })
  }

}

