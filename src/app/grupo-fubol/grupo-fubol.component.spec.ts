import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GrupoFubolComponent } from './grupo-fubol.component';

describe('GrupoFubolComponent', () => {
  let component: GrupoFubolComponent;
  let fixture: ComponentFixture<GrupoFubolComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GrupoFubolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrupoFubolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
