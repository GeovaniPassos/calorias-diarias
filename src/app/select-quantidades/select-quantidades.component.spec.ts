import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectQuantidadesComponent } from './select-quantidades.component';

describe('SelectQuantidadesComponent', () => {
  let component: SelectQuantidadesComponent;
  let fixture: ComponentFixture<SelectQuantidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectQuantidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectQuantidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
