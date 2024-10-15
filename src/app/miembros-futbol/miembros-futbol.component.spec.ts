import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MiembrosFutbolComponent } from './miembros-futbol.component';

describe('MiembrosFutbolComponent', () => {
  let component: MiembrosFutbolComponent;
  let fixture: ComponentFixture<MiembrosFutbolComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MiembrosFutbolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MiembrosFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
