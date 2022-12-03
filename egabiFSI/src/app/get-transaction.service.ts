import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './view-transactions-body/view-transactions-body.component';

@Injectable({
  providedIn: 'root',
})
export class GetTransactionService {
  constructor(private httpClient: HttpClient) {}

  getTransactionData(id: string | null): Observable<Transaction[]> {
    return this.httpClient.post<Transaction[]>('http://localhost:8282/usersTable/getTransactionsData',
      {
        accountNumber: id,
      }
    );
  }
}
