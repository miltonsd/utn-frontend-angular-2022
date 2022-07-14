import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Components
import { PruebaComponent } from './components/prueba/prueba.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
// Directive
import { CustomDirectiveDirective } from './directives/custom-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    NavbarComponent,
    CardComponent,
    CustomDirectiveDirective,
    CardContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
