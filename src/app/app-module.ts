
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Necesario para ngModel en el servicio
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home';
import { ComponentExplanation } from './components/component-explanation/component-explanation';
import { ServiceExplanation } from './components/service-explanation/service-explanation';
import { RoutingExplanation} from './components/routing-explanation/routing-explanation';
import { OopExplanation } from './components/oop-explanation/oop-explanation';

@NgModule({
  declarations: [
    // AppComponent,
    // HomeComponent,
    // ComponentExplanation,
    // ServiceExplanation,
    // RoutingExplanation,
    // OopExplanation
  ],
  imports: [
    BrowserModule,
    FormsModule, // Añade FormsModule aquí si lo usas (por ejemplo, en el servicio con [(ngModel)])
    HighlightModule,

  ],
  providers: [],
 // bootstrap: [AppComponent]
})
export class AppModule { }
