import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account-information-body/account-information-body.component';

@Injectable({
  providedIn: 'root'
})
export class GetAccountService {

  constructor(private httpClient:HttpClient) { }

  getAccountData(id:string | null): Observable<Account>
  {
    return this.httpClient.post<Account>('http://localhost:8282/usersTable/getAccountData', {
      accountNumber: id
    });
  }
}
