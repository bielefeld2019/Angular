import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDetalheComponent } from './user-detalhe/user-detalhe.component';
import { UserService } from './user.service';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UsersComponent, UserDetalheComponent],
  imports: [
    CommonModule,
    BrowserModule,
    UserRoutingModule
  ],
  providers: [UserService]
})
export class UserModule { }
