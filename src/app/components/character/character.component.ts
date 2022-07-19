import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit, OnChanges, OnDestroy {
  @Input() character!: Character;

  constructor() {}

  ngOnInit(): void {
    console.log('on init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  ngOnDestroy(): void {
    console.log('on destroy');
  }
}
