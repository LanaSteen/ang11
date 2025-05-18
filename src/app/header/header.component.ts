import { Component, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignalService } from '../Services/signal.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    constructor(private sig : SignalService, private authNew : AuthService){
      effect(() => {
        this.user = this.sig.userName()
        this.user != "" ? this.isAuth = true : this.isAuth=false
         this.isAuthNew =  this.authNew.authentificated()
      })
    }

    logOut(){
      this.authNew.logOut()
      
    }

    isAuthNew = false

  isAuth = false   

   activeRouteClass = "active"



   user = ""
}
