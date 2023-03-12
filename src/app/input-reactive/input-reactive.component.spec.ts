import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputReactiveComponent } from './input-reactive.component';

describe('InputReactiveComponent', () => {
  let component: InputReactiveComponent;
  let fixture: ComponentFixture<InputReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
