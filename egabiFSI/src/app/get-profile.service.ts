import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './personal-information-body/personal-information-body.component';

@Injectable({
  providedIn: 'root'
})
export class GetProfileService {

  constructor(private httpClient: HttpClient) { }

  getProfileData(id: string | null): Observable<Profile> {
    return this.httpClient.post<Profile>('http://localhost:8282/usersTable/getProfileData',
      {
        accountNumber: id
      }
    );
  }
}