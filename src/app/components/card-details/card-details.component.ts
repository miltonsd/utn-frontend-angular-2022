import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from 'src/app/interfaces/hero';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent {
  heroes: Hero[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
  ];
  hero!: Hero;

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((params: Params) => {
      console.log('super log');
      if (params['cardId']) {
        const filtered = this.heroes.filter(
          (hero) => hero.id.toString() === params['cardId']
        );
        this.hero = filtered[0];
      }
    });

    // console.log(this._activatedRoute.snapshot.queryParams['page']);

    // this._activatedRoute.snapshot.params['cardId'];
  }
}
