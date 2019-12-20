import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartyaCreateComponent } from './kartya-create.component';

describe('KartyaCreateComponent', () => {
  let component: KartyaCreateComponent;
  let fixture: ComponentFixture<KartyaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartyaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartyaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
