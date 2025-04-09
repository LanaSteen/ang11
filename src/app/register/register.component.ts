import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../Services/user/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private userService : UserService){}
  email : string = ""
  password : string = ""

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
        })
  
     }
  }
}
