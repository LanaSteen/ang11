import { Component, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignalService } from '../Services/signal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    constructor(private sig : SignalService){
      effect(() => {
        this.user = this.sig.userName()
        this.user != "" ? this.isAuth = true : this.isAuth=false
      })
    }


  isAuth = false   

   activeRouteClass = "active"



   user = ""
}
