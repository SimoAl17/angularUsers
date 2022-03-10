import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from './post';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  

  constructor(private http: HttpClient) { }

  //fetchUsers(): Promise<Response> {
  //  return fetch("https://jsonplaceholder.typicode.com/users")
  //}



  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users").pipe(
  //   map(usersArray => {
  //     for (const user of usersArray) {
  //       user.name = user.name.toUpperCase();
  //     }

  //     return usersArray;
  //   })
  //   );
  // }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");

  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>("https://jsonplaceholder.typicode.com/users/" + id);

  }

  getPostsOfUser(id: number): Observable<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts?userId=" + id);
  }

  
}
