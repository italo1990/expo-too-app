import { Injectable } from '@angular/core';

// El decorador @Injectable() marca una clase como un servicio que puede ser inyectado.
// El metadato 'providedIn: 'root'' significa que el servicio es un singleton y se
// proporciona en el inyector raíz, haciéndolo disponible en toda la aplicación.
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data: string[] = ['Dato Inicial 1', 'Dato Inicial 2', 'Dato Inicial 3'];

  constructor() { }

  getData(): string[] {
    return this._data;
  }

  addData(item: string): void {
    this._data.push(item);
  }
}
