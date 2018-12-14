import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadIndexComponent } from './ciudad-index.component';

describe('CiudadIndexComponent', () => {
  let component: CiudadIndexComponent;
  let fixture: ComponentFixture<CiudadIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
