import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../Services/user/user.service';
import { User } from '../Models/user';


// AngularJS 
// Angular2 - 19



@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
   

     rame? : string | number

     constructor(private route : ActivatedRoute, private userService : UserService){
     
           this.route.params.subscribe(data => {

               console.log(data["id"])
               this.userService.getUserById(data["id"]).subscribe(resp => {
                    console.log(resp.data)
                    this.singleUser = resp.data
               })
           }
          
          
          
          )
          //  this.route.params.subscribe(data => console.log(data["name"]))
           

     }


     singleUser : User = new User()



// promise .then
// observable    .subscibe
    //  ngOnInit(){

    //  }
}
