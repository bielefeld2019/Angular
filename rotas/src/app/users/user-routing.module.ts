import { UsersComponent } from './users.component';
import { UserDetalheComponent } from './user-detalhe/user-detalhe.component';


import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



const  userRoutes = [
  { path: 'users', component: UsersComponent, children: [
  { path: ':id', component: UserDetalheComponent },
  { path: ':id/edit', component: UserDetalheComponent },
  { path: ':id/excluir', component: UserDetalheComponent }


  ]}
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
