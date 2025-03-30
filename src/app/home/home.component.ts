import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonFunctionService } from '../Services/common-function.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    constructor(private commonFunc : CommonFunctionService){

    }

    itemId = 5
    name = "John"
    lastName = ""


    studentArr = ["dsd", "fddf","fdf"]

    save(){
      this.commonFunc.printInfo(this.name, this.lastName)
      console.log(this.commonFunc.getRandomElementFromArr(this.studentArr))
    }



    //locaStorageService

    




}
