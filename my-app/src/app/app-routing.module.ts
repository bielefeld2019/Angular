import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'ngif', component: NgIfComponent },
  { path: 'ngfor', component: NgForComponent },
  { path: 'ngswitch', component: NgSwitchComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
