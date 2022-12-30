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

export class UserEffects {
  constructor (private actions$: Actions, private userService: UserService) {}

  loadUser$ = createEffect(
    () => this.actions$.pipe(
      ofType(userActions.loadUser),
      mergeMap((action) => this.userService.getUserByID(action.id)
        .pipe(
          map(user => userActions.loadUser_success({user})),
          catchError(error => of(userActions.loadUser_error({payload: error})))
        )
      )
    )
  );
}
