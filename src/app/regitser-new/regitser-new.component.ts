import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Services/user/user.service';

@Component({
  selector: 'app-regitser-new',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './regitser-new.component.html',
  styleUrl: './regitser-new.component.scss'
})
export class RegitserNewComponent {

    constructor(private api : UserService){}



  registerUser : RegisterUser = new RegisterUser

  registerNewUser(){
      this.api.registerNewUser(this.registerUser).subscribe(resp => console.log(resp))
  }

}





export class RegisterUser {
  phoneNumber!: string  ////  უნიკალური  599999999
  password!: string
  email: string  =""
  firstName: string =""
  lastName: string =""
  role: string =""
}


// {

// }