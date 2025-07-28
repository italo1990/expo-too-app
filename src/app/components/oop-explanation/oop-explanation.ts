import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, of, from } from 'rxjs'; // 'of' y 'from' son operadores de creación
import { map, filter } from 'rxjs/operators'; // Operadores para transformar o filtrar el flujo

@Component({
  selector: 'app-oop-explanation',
  templateUrl: './oop-explanation.html', // Apunta a un archivo HTML separado para mantener el ejemplo
  styleUrls: ['./oop-explanation.scss']
})
export class OopExplanation implements OnInit, OnDestroy {
  observableValue: string = 'Esperando datos...';
  private dataSubscription: Subscription | undefined; // Para gestionar la suscripción y evitar fugas de memoria

  ngOnInit(): void {
    // 1. Creación de un Observable:
    // 'of()' crea un observable que emite una secuencia de valores definidos y luego completa.
    const myObservable = of('Hola', 'Mundo', 'Angular', 'RxJS');

    // 'from()' crea un observable de un array o un iterable.
    const numberObservable = from([1, 2, 3, 4, 5]);

    // 2. Suscripción a un Observable:
    // Nos suscribimos al observable para empezar a recibir sus emisiones.
    // El método 'subscribe' toma hasta tres callbacks: next, error, complete.
    this.dataSubscription = myObservable.subscribe({
      next: (value: string) => {
        // 'next' se llama cada vez que el observable emite un nuevo valor.
        console.log('Valor emitido:', value);
        this.observableValue = value; // Actualiza la UI con el último valor
      },
      error: (error: any) => {
        // 'error' se llama si ocurre un error en el flujo.
        console.error('Error en el observable:', error);
      },
      complete: () => {
        // 'complete' se llama cuando el observable ha terminado de emitir valores.
        console.log('Observable completado.');
        this.observableValue = 'Observable completado!';
      }
    });

    // Ejemplo de uso de operadores: map y filter
    numberObservable.pipe(
      // 'map' transforma cada valor emitido. Aquí, duplica el número.
      map(num => num * 2),
      // 'filter' permite que solo pasen los valores que cumplen una condición.
      filter(num => num > 5)
    ).subscribe(transformedNum => {
      console.log('Número transformado y filtrado:', transformedNum);
    });
  }

  ngOnDestroy(): void {
    // Es CRÍTICO desuscribirse de los observables para evitar fugas de memoria,
    // especialmente con observables de larga duración (ej. HTTP requests, eventos de UI).
    // Esto se hace típicamente en el hook ngOnDestroy.
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
      console.log('Suscripción desuscrita.');
    }
  }
}
