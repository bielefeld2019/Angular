import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestModule } from './test/test.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NgSwitchComponent,
    NgIfComponent,
    NgForComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
