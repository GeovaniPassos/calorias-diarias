import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAlimentosComponent } from './tabela-alimentos.component';

describe('TabelaCaloriasComponent', () => {
  let component: TabelaAlimentosComponent;
  let fixture: ComponentFixture<TabelaAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaAlimentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
