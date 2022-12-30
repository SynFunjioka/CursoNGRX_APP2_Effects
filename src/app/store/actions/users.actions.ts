import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUsers = createAction('[User] Load users',);

export const loadUsers_success = createAction(
  '[User] Load users success',
  props<{users: User[]}>()
);

export const loadUsers_error = createAction(
  '[User] Load users error',
  props<{payload: any}>()
);
