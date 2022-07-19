import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, Subject, takeUntil } from 'rxjs';

import { Hero } from 'src/app/interfaces/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent {
  hero!: Hero;

  subscription!: Subscription;

  // private _destroy$ = new Subject();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroes: HeroesService
  ) {
    this._activatedRoute.params.subscribe((params: Params) => {
      // console.log('super log');
      // .pipe(takeUntil(this._destroy$))
      if (params['cardId']) {
        this.subscription = this._heroes.heroes().subscribe({
          next: (heroes: Hero[]) => {
            console.log(heroes);
            const filtered = heroes.filter(
              (hero) => hero.id.toString() === params['cardId']
            );
            this.hero = filtered[0];
          },
        });
      }
    });

    // console.log(this._activatedRoute.snapshot.queryParams['page']);

    // this._activatedRoute.snapshot.params['cardId'];
  }

  stopSubscription(): void {
    console.log('stop subscription');
    // this._destroy$.complete();

    this.subscription.unsubscribe();
  }
}
