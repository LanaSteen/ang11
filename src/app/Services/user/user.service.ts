import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : ApiService) { }

  getUsers(){
        return this.http.getApi("https://reqres.in/api/users")
  }
}
