import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = environment.security_url_api

  constructor(private http : HttpClient) { }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}/Users/Register`, userObj);
  }

  login(userObj:any){
    return this.http.post<any>(`${this.baseUrl}/Users/Login`, userObj);
  } 
}
