import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnadirGrupoComponent } from './anadir-grupo.component';

describe('AnadirGrupoComponent', () => {
  let component: AnadirGrupoComponent;
  let fixture: ComponentFixture<AnadirGrupoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AnadirGrupoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnadirGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
