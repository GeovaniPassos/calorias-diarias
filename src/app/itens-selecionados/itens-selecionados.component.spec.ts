import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensSelecionadosComponent } from './itens-selecionados.component';

describe('ItensSelecionadosComponent', () => {
  let component: ItensSelecionadosComponent;
  let fixture: ComponentFixture<ItensSelecionadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItensSelecionadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensSelecionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
