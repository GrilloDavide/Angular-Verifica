import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  

  constructor(private httpClient : HttpClient) { }


  login(name : string, surname : string, email : string, username : string, password : string) {
    let http_headers = new HttpHeaders().set("Content-Type", "application/json")
    return this.httpClient.post<Valid>("",
     '{"name":"' + name + 
     '", "surname":"' + surname + 
     '", "email":"' + email +
     '", "username":"' + username +
     '", "password":"' + password +
      '"}', {headers:http_headers})
  }

  register(name : string, surname : string, email : string, username : string, password : string){
    let http_headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.post<User>("",
    '{"name":"' + name + 
    '", "surname":"' + surname + 
    '", "email":"' + email +
    '", "username":"' + username +
    '", "password":"' + password +
     '"}', {headers:http_headers})
  }
}

export interface Valid {
  valid : boolean
}

export interface User {
  name : string,
  surname : string,
  email : string,
  password : string,
  username : string,
  id : number,
}