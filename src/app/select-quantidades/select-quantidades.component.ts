import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { MATERIAL_MODULES } from '../material';

@Component({
  selector: 'app-select-quantidades',
  imports: [MATERIAL_MODULES],
  templateUrl: './select-quantidades.component.html',
  styleUrl: './select-quantidades.component.css'
})

export class SelectQuantidadesComponent {

  tipo: string = '';
  quantidade: number | null = null;

  constructor(private dialogRef: MatDialogRef<any>) {}

  onSubmit(){
    this.dialogRef.close({
      tipo: this.tipo,
      quantidade: this.quantidade
    });
  }
}


