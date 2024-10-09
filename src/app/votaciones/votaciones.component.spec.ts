import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VotacionesComponent } from './votaciones.component';

describe('VotacionesComponent', () => {
  let component: VotacionesComponent;
  let fixture: ComponentFixture<VotacionesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VotacionesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VotacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
