import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUser = createAction(
  '[User] Load user',
  props<{id: string}>()
  );

export const loadUser_success = createAction(
  '[User] Load user success',
  props<{user: User}>()
);

export const loadUser_error = createAction(
  '[User] Load user error',
  props<{payload: any}>()
);
