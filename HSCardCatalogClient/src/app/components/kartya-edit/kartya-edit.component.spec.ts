import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartyaEditComponent } from './kartya-edit.component';

describe('KartyaEditComponent', () => {
  let component: KartyaEditComponent;
  let fixture: ComponentFixture<KartyaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartyaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartyaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
