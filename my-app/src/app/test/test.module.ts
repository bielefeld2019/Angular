import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDetalhesComponent } from './test-detalhes/test-detalhes.component';
import { TestComponent } from './test.component';
import { TestService } from './test.service';


@NgModule({
  declarations: [
    TestDetalhesComponent,
    TestComponent
  ],
  
  imports: [
    CommonModule
  ],

  exports: [
    TestComponent
  ],

  providers: [
    TestService
  ]
})
export class TestModule { }
