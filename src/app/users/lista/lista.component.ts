import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

//* Models *----------------------------------------------------------------
import { User } from 'src/app/models/user.model';

//*STORE Actions *-------------------------------------------------------
import { loadUsers } from 'src/app/store/actions';
import { AppState } from '../../store/app.reducer';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  users: User[] = [];
  loading: boolean = false;
  error!: any;

  constructor(public store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('users').subscribe(({users, loading, error}) => {
      this.users = users
      this.loading = loading
      this.error = error
    });
    this.store.dispatch(loadUsers());
  }


}
