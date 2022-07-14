import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() hero!: Hero;
  @Output() removeChild = new EventEmitter<Hero>();

  constructor() {}

  onClick(): void {
    console.log('click', this.hero);
  }

  onRemove(): void {
    console.log('remove', this.hero);
    this.removeChild.emit(this.hero);
  }
}
