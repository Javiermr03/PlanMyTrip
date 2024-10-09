import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CostesComponent } from './costes.component';

describe('CostesComponent', () => {
  let component: CostesComponent;
  let fixture: ComponentFixture<CostesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CostesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CostesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
