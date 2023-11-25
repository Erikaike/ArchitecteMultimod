import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbComponentComponent } from './dumb-component.component';

describe('DumbComponentComponent', () => {
  let component: DumbComponentComponent;
  let fixture: ComponentFixture<DumbComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DumbComponentComponent]
    });
    fixture = TestBed.createComponent(DumbComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
