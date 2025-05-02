import { Component } from '@angular/core';
import { MATERIAL_MODULES } from '../material';
import { MatTableDataSource} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { SelectQuantidadesComponent } from "../select-quantidades/select-quantidades.component";


export interface alimentos {
  nome: string;
  calorias: number;
  proteinas: number;
  carboidratos: number;
}

const ALIMENTOS_DATA: alimentos[] = [
  {nome: 'Banana', calorias: 22, proteinas: 10, carboidratos: 5},
  {nome: 'Pera', calorias: 20, proteinas: 10, carboidratos: 5},
  {nome: 'Hamburguer', calorias: 342, proteinas: 10, carboidratos: 5},
  {nome: 'Pizza', calorias: 222, proteinas: 10, carboidratos: 5},
  {nome: 'Chocolate', calorias: 122, proteinas: 10, carboidratos: 5},
]

@Component({
  selector: 'app-tabela-calorias',
  templateUrl: './tabela-calorias.component.html',
  styleUrl: './tabela-calorias.component.css',
  imports: [MATERIAL_MODULES, CommonModule]
})
export class TabelaCaloriasComponent {
  displayedColumns: string[] = ['nome', 'calorias', 'proteinas', 'carboidratos'];
  dataSource = new MatTableDataSource(ALIMENTOS_DATA);

  //TODO: Falta corrigr o import do MatDialog
  constructor(private dialog: MatDialog){}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  alimentos: any[] = [];

  onSelecionarAlimentos(alimentos: any) {
    const dialogRef = this.dialog.open(SelectQuantidadesComponent, {
      width: '300px',
      data: alimentos
    });


    dialogRef.afterClosed().subscribe((resultado) => {
      if(resultado) {
        const itemSelecionado = {
          nome: alimentos.nome,
          tipo: resultado.tipo,
          quantidade: resultado.quantidade,
          calorias: alimentos.calorias * resultado.quantidade,
          proteinas: alimentos.proteinas * resultado.quantidade,
          caboidratos: alimentos.carboidratos * resultado.quantidade
        };

        this.itensSelecionados.push(itemSelecionado);
        this.atualizarTotais();
      }
    })
  }

  atualizarTotais() {}

  itensSelecionados: any[] = [];

  addItem(alimento: alimentos) {
    const alimentoExistente = this.itensSelecionados.some(selected => selected.nome === alimento.nome);

    if (!alimentoExistente) {
      this.itensSelecionados.push(alimento);
    }
  }
}
