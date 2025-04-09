import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaltorageService {

  constructor() { }


    setLocalStorage(key:string, value:string){
      localStorage.setItem(key, value)
    }
}
