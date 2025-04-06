import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { regUser } from '../../Models/user';

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
}
