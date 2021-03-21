import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiComponent } from './toi.component';

describe('ToiComponent', () => {
  let component: ToiComponent;
  let fixture: ComponentFixture<ToiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
