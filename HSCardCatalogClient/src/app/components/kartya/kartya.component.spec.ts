import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartyaComponent } from './kartya.component';

describe('KartyaComponent', () => {
  let component: KartyaComponent;
  let fixture: ComponentFixture<KartyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
