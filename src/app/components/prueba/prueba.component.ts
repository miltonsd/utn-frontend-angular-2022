import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent {
  type = 'button';
  colors: string[] = [];
  name = 'milton sotto diaz';
  show = false;
  color = 'red';

  onClick(event: MouseEvent) {
    console.log('click me', event);
    this.type = 'submit';
    this.show = !this.show;
    this.color = 'blue';
  }

  // Directivas
  // Tipos de directivas
  // - Estructuras
  // - De atributo
  // - De template - components
  // - Custom directive
}
