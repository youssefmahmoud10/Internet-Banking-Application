import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }

  register(accountNumber:String, password:String): Observable<number>
  {
    return this.httpClient.put<number>('http://localhost:8282/usersTable/register', {
      accountNumber:accountNumber,
      password:password
    });
  }

}
