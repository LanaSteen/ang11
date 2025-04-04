import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getApi(url : string) : Observable<any>{
      return  this.http.get<any>(url)
  }
}


// fetch    promise   .then
// getApi   Observable  .subscribe