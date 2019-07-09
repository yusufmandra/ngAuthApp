import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _usersUrl = "http://localhost:3000/api/users";

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(this._usersUrl)
  }

}
