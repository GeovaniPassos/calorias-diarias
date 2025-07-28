import { Component } from '@angular/core';
import { TabelaAlimentosComponent } from './tabela-alimentos/tabela-alimentos.component';
import { ItensSelecionadosComponent } from "./itens-selecionados/itens-selecionados.component";
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [
    TabelaAlimentosComponent,
    ItensSelecionadosComponent,
    TabelaAlimentosComponent,
    MenuComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calorias-diarias';
}
