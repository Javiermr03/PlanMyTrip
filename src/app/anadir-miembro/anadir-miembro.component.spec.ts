import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnadirMiembroComponent } from './anadir-miembro.component';

describe('AnadirMiembroComponent', () => {
  let component: AnadirMiembroComponent;
  let fixture: ComponentFixture<AnadirMiembroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AnadirMiembroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnadirMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
