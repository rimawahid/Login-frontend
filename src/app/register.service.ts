import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

   private baseUrl="http://localhost:8080/user";

   registerUser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, user);
   }
}
