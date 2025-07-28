import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes que vamos a usar en nuestras rutas.
import { HomeComponent } from './components/home/home';
import { ComponentExplanation } from './components/component-explanation/component-explanation';
import { ServiceExplanation } from './components/service-explanation/service-explanation';
import { RoutingExplanation } from './components/routing-explanation/routing-explanation';
import { OopExplanation } from './components/oop-explanation/oop-explanation';

// Define las rutas de nuestra aplicación.
// Cada objeto en este array representa una ruta.
export const routes: Routes = [
  // Ruta por defecto: Cuando la URL es '/', muestra el HomeComponent.
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // Ruta para la explicación de Componentes.
  // Cuando la URL es '/componentes', Angular carga el ComponentExplanation.
  { path: 'componentes', component: ComponentExplanation },
  // Ruta para la explicación de Servicios.
  { path: 'servicios', component: ServiceExplanation },
  // Ruta para la explicación de Rutas.
  { path: 'rutas', component: RoutingExplanation },
  // Ruta para la explicación de POO, Decoradores y Observables.
  { path: 'oop', component: OopExplanation },
  // Ruta comodín (**): Si ninguna de las rutas anteriores coincide,
  // redirige al usuario a la página de inicio.
  // Es útil para manejar URLs no válidas y mantener una experiencia de usuario consistente.
  { path: '**', redirectTo: '' }
];

@NgModule({
  // Importa RouterModule.forRoot(routes) para configurar las rutas a nivel de la aplicación raíz.
  // 'forRoot' indica que es el módulo de enrutamiento principal.
  imports: [RouterModule.forRoot(routes)],
  // Exporta RouterModule para que las rutas estén disponibles en otros módulos,
  // especialmente en el AppModule.
  exports: [RouterModule]
})
export class AppRoutingModule { }

