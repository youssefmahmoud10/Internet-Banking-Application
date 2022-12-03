import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(private router:Router)
  {
    
  }


  test(){
    this.router.navigate([''])
  }
  name: string = '';

  setValue() {
    
  }

}
