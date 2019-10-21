import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(email:string,password:string){
    return this.http.post('http://localhost:3000/users/login',{email,password})
  }
  register(email:string,password:string){
    return this.http.post('http://localhost:3000/users/register',{email,password})

  }
}
