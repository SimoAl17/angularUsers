import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {


  constructor(private http: HttpClient) { }

  //fetchUsers(): Promise<Response> {
  //  return fetch("https://jsonplaceholder.typicode.com/users")
  //}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users").pipe(
    map(usersArray => {
      for (const user of usersArray) {
        user.name = user.name.toUpperCase();
      }

      return usersArray;
    })
    );
  }

  getUser(): Observable<User> {
    return this.http.get<User>("https://jsonplaceholder.typicode.com/users/" + "4");

  }
  
}
