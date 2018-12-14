import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaIndexComponent } from './clima-index.component';

describe('ClimaIndexComponent', () => {
  let component: ClimaIndexComponent;
  let fixture: ComponentFixture<ClimaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
