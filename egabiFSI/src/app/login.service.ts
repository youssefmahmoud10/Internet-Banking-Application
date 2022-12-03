import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  login(accountNumber:String, password:String): Observable<number>
  {
    return this.httpClient.post<number>('http://localhost:8282/usersTable/login', {
      accountNumber:accountNumber,
      password:password
    });
  }

}
