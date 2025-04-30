import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../Services/user/user.service';
import { LocalizedString } from '@angular/compiler';
import { LocaltorageService } from '../Services/localtorage.service';
import { Router, RouterModule } from '@angular/router';
import { SignalService } from '../Services/signal.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 constructor(private userService : UserService,
             private localStorage : LocaltorageService,
             private router : Router,
             private sig : SignalService
 ){}


  email : string = ""
  password : string = ""

  userName =''

  register(form : NgForm){

    
     if(form.valid){

         // let user = {
         //   email : this.email,
         //   password : this.password
         // }
         
        let user =  {
          email: "eve.holt@reqres.in",
          password: "pistol"
        }
        this.userService.registerUser(user).subscribe(resp => {
          console.log(resp)
          this.localStorage.setLocalStorage("token", resp.token)
          this.router.navigateByUrl("/home")

        })
  
     }
  }


  



  logIn(){
    this.sig.setUserName(this.userName)
  }
}
