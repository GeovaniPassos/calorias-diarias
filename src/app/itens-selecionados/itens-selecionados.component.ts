import { Component, Input } from '@angular/core';
import { MATERIAL_MODULES } from '../material';

@Component({
  selector: 'app-itens-selecionados',
  imports: [MATERIAL_MODULES],
  templateUrl: './itens-selecionados.component.html',
  styleUrl: './itens-selecionados.component.css'
})
export class ItensSelecionadosComponent {
  @Input() alimentosSelecionados: {
    nome: string;
    tipo: string;
    quantidade: number;
    calorias: number;
    proteinas: number;
    carboidratos: number;
  }[] = [];
}
