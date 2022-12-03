import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './personal-information-body/personal-information-body.component';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private httpClient:HttpClient) { }

  getUserData(id:string | null): Observable<User>
  {
    return this.httpClient.post<User>('http://localhost:8282/usersTable/getUserData', {
      accountNumber: id
    });
  }

}