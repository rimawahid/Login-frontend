import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
private baseUrl="http://localhost:8080/user/login";
  constructor(private HttpClient: HttpClient) { }

  loginUSer(user: User):Observable<Object>{
    return this.HttpClient.post(`${this.baseUrl}`,user);
  }
}
