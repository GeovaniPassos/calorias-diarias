import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCaloriasComponent } from './tabela-calorias.component';

describe('TabelaCaloriasComponent', () => {
  let component: TabelaCaloriasComponent;
  let fixture: ComponentFixture<TabelaCaloriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaCaloriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaCaloriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
