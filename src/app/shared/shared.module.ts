import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule, //?No se va a utilizar
    RouterModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
