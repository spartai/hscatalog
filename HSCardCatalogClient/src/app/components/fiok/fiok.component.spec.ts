import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiokComponent } from './fiok.component';

describe('FiokComponent', () => {
  let component: FiokComponent;
  let fixture: ComponentFixture<FiokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
