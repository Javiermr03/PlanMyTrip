import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditarMiembrosComponent } from './editar-miembros.component';

describe('EditarMiembrosComponent', () => {
  let component: EditarMiembrosComponent;
  let fixture: ComponentFixture<EditarMiembrosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EditarMiembrosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
