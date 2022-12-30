import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {mergeMap, map, catchError} from 'rxjs/operators';
import {of} from 'rxjs';

//*Services*----------------------------------------------------------------
import { UserService } from 'src/app/services/user.service';

//*Actions*----------------------------------------------------------------
import * as userActions from '../actions';

@Injectable({
  providedIn: 'root'
})

export class UsersEffects {
  constructor (private http: HttpClient, private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(
    () => this.actions$.pipe(
      ofType(userActions.loadUsers),
      mergeMap(() => this.userService.getUsers()
        .pipe(
          map(users => userActions.loadUsers_success({users})),
          catchError(error => of(userActions.loadUsers_error({payload: error})))
        )
      )
    )
  );
}
