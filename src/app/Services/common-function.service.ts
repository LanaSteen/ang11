import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionService {

  constructor() { }

  printInfo(name : string, lastname: string){
    console.log(`სახელი ${name}, გვარი :${lastname}`)
  }

  getRandomElementFromArr(arr : any[]){
      let index = Math.floor(Math.random()*arr.length)
      return arr[index]
  }


}





///  singleton  --  
