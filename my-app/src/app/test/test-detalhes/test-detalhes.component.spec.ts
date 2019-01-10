import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDetalhesComponent } from './test-detalhes.component';

describe('TestDetalhesComponent', () => {
  let component: TestDetalhesComponent;
  let fixture: ComponentFixture<TestDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
