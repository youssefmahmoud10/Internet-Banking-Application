import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  accountNumber:string="";
  password:String="";
  registerFirst!:number
  wrongPassword!:number
  accountNotFound!:number

  constructor(private loginService:LoginService, private router:Router) {
  }

  login(): void {
    this.loginService.login(this.accountNumber, this.password).subscribe((res:any) => {
      if(res==0){
        this.registerFirst=0;
        this.wrongPassword=0;
        this.accountNotFound=1;
      }
      if(res==1){
        sessionStorage.setItem("accountNusmber", this.accountNumber);
        this.router.navigate(['/profile/personal']);
      }
      if(res==2){
        this.accountNotFound=0;
        this.wrongPassword=0;
        this.registerFirst=1;
      }
      if(res==3){
        this.registerFirst=0;
        this.accountNotFound=0;
        this.wrongPassword=1;
      }
    })
  }
}