import { Component } from '@angular/core';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  accountNumber:String="";
  password:String="";
  alreadyRegistered!:number
  successfulRegistration!:number
  accountNotFound!:number

  constructor(private registerService:RegisterService)
  {  }

  register(): void {
    this.registerService.register(this.accountNumber, this.password).subscribe((res:any) => {
      if(res==0){
        this.successfulRegistration=0;
        this.alreadyRegistered=0;
        this.accountNotFound=1;
      }
      if(res==1){
        this.accountNotFound=0;
        this.successfulRegistration=0;
        this.alreadyRegistered=1;
      }
      if(res==2){
        this.alreadyRegistered=0;
        this.accountNotFound=0;
        this.successfulRegistration=1
      }
    })
  }
}
