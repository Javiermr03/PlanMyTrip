import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { movilComponent } from './movil.component';

describe('MovilComponent', () => {
  let component: movilComponent;
  let fixture: ComponentFixture<movilComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [movilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(movilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
