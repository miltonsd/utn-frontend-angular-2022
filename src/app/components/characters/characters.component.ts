import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharactersResponse } from 'src/app/interfaces/character';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  charactersResponse!: CharactersResponse;
  isLoading: boolean;

  constructor(private _characters: CharactersService) {
    this.isLoading = false;
    // console.log('constructor');
  }

  ngOnInit(): void {
    // console.log(' on init');

    this.isLoading = true;
    this._characters.getCharacters().subscribe({
      next: (charactersResponse: CharactersResponse) => {
        console.log(charactersResponse);
        this.charactersResponse = charactersResponse;
        this.isLoading = false;
      },
      error: () => {},
    });
  }

  ngOnDestroy(): void {
    // console.log(' on destroy');
  }
}
