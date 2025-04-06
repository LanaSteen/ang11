import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { regUser } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getApi(url : string) : Observable<any>{
      return  this.http.get<any>(url)
  }

  getApiById(url : string, id:number) : Observable<any>{
    return  this.http.get<any>(`${url}/${id}`)
  }

  postApi(url: string, postData:any) : Observable<any>{
    return this.http.post(url, postData)
  }
}


// fetch    promise   .then
// getApi   Observable  .subscribe