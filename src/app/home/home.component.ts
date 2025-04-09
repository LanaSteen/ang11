import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonFunctionService } from '../Services/common-function.service';
import { FormsModule } from '@angular/forms';
import { IUser, User } from '../Models/user';
import { CommonModule } from '@angular/common';
import { UserService } from '../Services/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    constructor(private commonFunc : CommonFunctionService,
                private router:Router,
                private api :UserService){ }

    users: User[] =[]


// observable დაკვირვებადი
    users$ ? : Observable<any>

    ngOnInit(){
      
         this.users$ = this.api.getUsers()
         if( this.users$ ){
          console.log(this.users$)
          this.users$.subscribe(resp => {
            resp.data?  this.users = resp.data : this.users =[];
            // console.log(resp.data)
           })
         }
   
      
    }























    itemId = 5
    name = "John"
    lastName = ""


    studentArr = ["dsd", "fddf","fdf"]

    save(){
      this.commonFunc.printInfo(this.name, this.lastName)
      console.log(this.commonFunc.getRandomElementFromArr(this.studentArr))
    }


    // goToDetails(id : number){
    //    this.router.navigate([`/details/${id}`])
    // }


    // users: IUser[] = [
    //   {
    //     id: 1,
    //     email: "george.bluth@reqres.in",
    //     first_name: "George",
    //     last_name: "Bluth",
    //     avatar: "https://reqres.in/img/faces/1-image.jpg"
    //   },
    //   {
    //     id: 2,
    //     email: "janet.weaver@reqres.in",
    //     first_name: "Janet",
    //     last_name: "Weaver",
    //     avatar: "https://reqres.in/img/faces/2-image.jpg"
    //   },
    //   {
    //     id: 3,
    //     email: "emma.wong@reqres.in",
    //     first_name: "Emma",
    //     last_name: "Wong",
    //     avatar: "https://reqres.in/img/faces/3-image.jpg"
    //   },
    //   {
    //     id: 4,
    //     email: "eve.holt@reqres.in",
    //     first_name: "Eve",
    //     last_name: "Holt",
    //     avatar: "https://reqres.in/img/faces/4-image.jpg"
    //   },
    //   {
    //     id: 5,
    //     email: "charles.morris@reqres.in",
    //     first_name: "Charles",
    //     last_name: "Morris",
    //     avatar: "https://reqres.in/img/faces/5-image.jpg"
    //   },
    //   {
    //     id: 6,
    //     email: "tracey.ramos@reqres.in",
    //     first_name: "Tracey",
    //     last_name: "Ramos",
    //     avatar: "https://reqres.in/img/faces/6-image.jpg"
    //   }
    // ];





    //locaStorageService

    




}
