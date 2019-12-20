import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartyaFormComponent } from './kartya-form.component';

describe('KartyaFormComponent', () => {
  let component: KartyaFormComponent;
  let fixture: ComponentFixture<KartyaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartyaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartyaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
