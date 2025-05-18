import { Component } from '@angular/core';
import { ErrorDialogComponent } from "../error-dialog/error-dialog.component";
import { SignalService } from '../Services/signal.service';
import { FormsModule } from '@angular/forms';
import { UserType, WebUser } from '../Models/user';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ErrorDialogComponent, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private sig : SignalService, private auth: AuthService, private route : Router){

  }
  ngOnInit(){
      if(!this.auth.isLogedIn()){
              this.route.navigateByUrl("/logInNewUser")
      }
  }

  amount? : number

  saveDataAmount(){
    if(this.amount){
      this.sig.setDataAmount(this.amount)
    }
  }


  user : WebUser = new WebUser

  logIn(){
    this.user.userType = UserType.Admin
  }

}
