import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartyakComponent } from './kartyak.component';

describe('KartyakComponent', () => {
  let component: KartyakComponent;
  let fixture: ComponentFixture<KartyakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartyakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartyakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
