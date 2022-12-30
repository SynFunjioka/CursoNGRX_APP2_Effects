import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map, catchError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  api:string = 'https://reqres.in/api';
  constructor(private http: HttpClient) { }

  getUsers() {
    // console.log(`${this.api}/users?per_page=2`);

    return this.http.get(`${this.api}/users`).pipe(
      map(({data}:any) => data),
      catchError(err => {
        console.warn(err)
        return err;
      })
    );
  }

  getUserByID(userID: string) {
    // console.log(`${this.api}/users?per_page=2`);

    return this.http.get(`${this.api}/users/${userID}`).pipe(
      map(({data}:any) => data),
      catchError(err => {
        console.warn(err)
        return err;
      })
    );
  }
}
