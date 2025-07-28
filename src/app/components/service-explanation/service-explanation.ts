import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data'; // Asegúrate de la ruta correcta
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-explanation',
  templateUrl: './service-explanation.html',
  imports: [CommonModule, FormsModule], // Importa CommonModule si usas directivas como ngFor o ngIf
  styleUrls: ['./service-explanation.scss']
})
export class ServiceExplanation implements OnInit {
  dataItems: string[] = [];
  newItem: string = '';

  // Inyección de dependencias: Angular inyecta una instancia de DataService
  // cuando crea una instancia de ServiceExplanation.
  constructor(private dataService: DataService) { }

  // ngOnInit es un Hook del ciclo de vida de Angular.
  // Se ejecuta una vez que Angular ha inicializado todas las propiedades en el componente.
  ngOnInit(): void {
    this.dataItems = this.dataService.getData();
  }

  addItem(): void {
    if (this.newItem.trim()) {
      this.dataService.addData(this.newItem);
      this.dataItems = this.dataService.getData(); // Actualiza la lista
      this.newItem = ''; // Limpia el input
    }
  }
}
