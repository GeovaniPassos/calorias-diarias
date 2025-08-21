import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MATERIAL_MODULES } from '../material';
import { MatTableDataSource } from '@angular/material/table';
export interface AlimentoSelecionado {
  nome: string;
  tipo: string;
  quantidade: number;
  calorias: number;
  proteinas: number;
  carboidratos: number;
}

@Component({
  selector: 'app-itens-selecionados',
  imports: [MATERIAL_MODULES],
  templateUrl: './itens-selecionados.component.html',
  styleUrl: './itens-selecionados.component.css'
})
export class ItensSelecionadosComponent implements OnChanges {
  displayedColumns: string[] = ['nome', 'quantidade' ,'calorias', 'proteinas', 'carboidratos'];
  dataSource = new MatTableDataSource<AlimentoSelecionado>([]);

  @Input() alimentosSelecionados: AlimentoSelecionado[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['alimentosSelecionados']) {
      this.dataSource.data = this.alimentosSelecionados;
    }
  }
}
