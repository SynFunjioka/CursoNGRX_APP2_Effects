import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map, catchError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    console.log(`${environment.apiUrl}/users?per_page=2`);

    return this.http.get(`${environment.apiUrl}/users`).pipe(
      map(({data}:any) => data),
      catchError(err => {
        console.warn(err)
        return err;
      })
    );
  }
}
