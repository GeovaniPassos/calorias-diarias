import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabelaCaloriasComponent } from './tabela-calorias/tabela-calorias.component';

@Component({
  selector: 'app-root',
  imports: [TabelaCaloriasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calorias-diarias';
}
