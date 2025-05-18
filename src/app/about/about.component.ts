import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private auth : AuthService, private route : Router){}


  book(){
    
    if(this.auth.isLogedIn()){
       console.log("booked")
    }
    else {
      alert("Your cant do this action")
      this.route.navigateByUrl('/logInNewUser')

    }


 
  }
}
