// Importa el decorador Component desde el paquete central de Angular.
import { Component } from '@angular/core';

// El decorador @Component() se usa para declarar una clase como un componente.
// Provee metadatos que determinan cómo se procesa, instancia y usa el componente en tiempo de ejecución.
@Component({
  // 'selector' define el nombre de la etiqueta HTML personalizada que usaremos
  // para incrustar este componente en nuestras plantillas (e.g., <app-component-explanation></app-component-explanation>).
  selector: 'app-component-explanation',
  // 'templateUrl' especifica la ruta al archivo HTML que define la vista del componente.
  // Aquí es donde se escribe el marcado HTML que los usuarios verán.
  templateUrl: './component-explanation.html',
  // 'styleUrls' es un array de rutas a archivos CSS que definen los estilos específicos para este componente.
  // Los estilos definidos aquí son por defecto encapsulados, es decir, solo afectan a este componente.
  styleUrls: ['./component-explanation.scss']
})
// La clase del componente es donde se define la lógica, propiedades y métodos del componente.
// Es una clase de TypeScript, lo que permite usar características de POO, tipado estricto, etc.
export class ComponentExplanation {
  // Propiedad 'title' que puede ser mostrada en la plantilla HTML.
  title: string = 'Mi Primer Componente Angular';

  // Método que podría ser llamado desde la plantilla, por ejemplo, en un evento de click.
  sayHello(): void {
    alert('¡Hola desde el Componente!');
  }
}
