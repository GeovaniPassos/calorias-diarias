import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabelaCaloriasComponent } from './tabela-calorias/tabela-calorias.component';
import { MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  imports: [TabelaCaloriasComponent, MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calorias-diarias';
}
