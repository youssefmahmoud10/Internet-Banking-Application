import { Component } from '@angular/core';
import { GetProfileService } from '../get-profile.service';
import { GetUserService } from '../get-user.service';

@Component({
  selector: 'app-personal-information-body',
  templateUrl: './personal-information-body.component.html',
  styleUrls: ['./personal-information-body.component.css']
})
export class PersonalInformationBodyComponent {
 
  user!:User;
  isLoaded: boolean = false;
  profile!:Profile;

  constructor(private getUserService:GetUserService, private getProfileService:GetProfileService)
  {
    this.getProfileService.getProfileData(sessionStorage.getItem('accountNusmber')).subscribe((res:Profile) => {
      this.profile = res;
      this.isLoaded = true;
    });

    this.getUserService.getUserData(sessionStorage.getItem('accountNusmber')).subscribe((res:User) => {
      this.user = res;
      this.isLoaded = true;
    });
  }
}

export interface User {
  nid:String;
	name:String;	
	birthDate:String;
	address:String;
	maritalStatus:String;
	mobileNumber:String;
	email:String;
	nationality:String;
}

export interface Profile {
  name:String;
	balance:number;
}