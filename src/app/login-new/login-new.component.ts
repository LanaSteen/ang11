import { Component } from '@angular/core';
import { UserService } from '../Services/user/user.service';
import { RegisterUser } from '../regitser-new/regitser-new.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login-new',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-new.component.html',
  styleUrl: './login-new.component.scss'
})
export class LoginNewComponent {

  // 544123123123

      constructor(private api : UserService, private auth  : AuthService){}
  
  
  
    registerUser : RegisterUser = new RegisterUser
  
    loginNewUser(){
        this.api.logInNewUser(this.registerUser).subscribe(resp => {
          console.log(resp)
          localStorage.setItem("token", resp.token)
          this.auth.logIn()
        })
    }

}
