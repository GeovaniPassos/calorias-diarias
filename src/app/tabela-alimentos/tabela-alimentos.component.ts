import { ItensSelecionadosComponent } from '../itens-selecionados/itens-selecionados.component';
import { Component } from '@angular/core';
import { MATERIAL_MODULES } from '../material';
import { MatTableDataSource} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { SelectQuantidadesComponent } from "../select-quantidades/select-quantidades.component";
import { MatDialog } from '@angular/material/dialog';

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
  selector: 'app-tabela-alimentos',
  templateUrl: './tabela-alimentos.component.html',
  styleUrl: './tabela-alimentos.component.css',
  imports: [MATERIAL_MODULES, CommonModule]
})
export class TabelaAlimentosComponent {
  displayedColumns: string[] = ['nome', 'calorias', 'proteinas', 'carboidratos'];
  dataSource = new MatTableDataSource(ALIMENTOS_DATA);

  constructor(private dialog: MatDialog){}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selecionarQtdAlimentos(alimentos: alimentos) {
    const dialogRef = this.dialog.open(SelectQuantidadesComponent, {
      width: '300px',
      data: alimentos
    });

    dialogRef.afterClosed().subscribe((resultado: { tipo: any; quantidade: number; }) => {
      if(resultado) {
        const itemSelecionado = {
          nome: alimentos.nome,
          tipo: resultado.tipo,
          quantidade: resultado.quantidade,
          calorias: alimentos.calorias * resultado.quantidade,
          proteinas: alimentos.proteinas * resultado.quantidade,
          caboidratos: alimentos.carboidratos * resultado.quantidade
        };

        //this.atualizarTotais();
      }
    })
  }
  onSelecionarAlimentos(alimentos: alimentos){

  }

}
