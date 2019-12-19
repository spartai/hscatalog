import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaklikComponent } from './paklik.component';

describe('PaklikComponent', () => {
  let component: PaklikComponent;
  let fixture: ComponentFixture<PaklikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaklikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaklikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
