import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { regUser } from '../../Models/user';
import { RegisterUser } from '../../regitser-new/regitser-new.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : ApiService) { }

  getUsers(){
        return this.http.getApi("https://reqres.in/api/users")
  }
  getUserById(id : number){
    return this.http.getApiById("https://reqres.in/api/users", id)
   }

  registerUser(user : regUser){
    return this.http.postApi("https://reqres.in/api/register", user)
  }

  registerNewUser(user : RegisterUser){
      return this.http.postApi("https://rentcar.stepprojects.ge/api/Users/register", user)
  }

    logInNewUser(user : RegisterUser){
      return this.http.postApi("https://rentcar.stepprojects.ge/api/Users/login", user)
  }
}


