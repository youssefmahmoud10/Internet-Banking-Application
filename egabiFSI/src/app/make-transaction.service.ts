import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MakeTransactionService {

  constructor(private httpClient:HttpClient) { }

  makeTransaction(amount:number, date:String, transactionType:String, receiver:String, accountNumber:string | null): Observable<number>
  {
    return this.httpClient.post<number>('http://localhost:8282/usersTable/makeTransaction', {
      amount:amount,
      date:date,
      transactionType:transactionType,
      receiver:receiver,
      accountNumber:accountNumber
    });
  }

}
