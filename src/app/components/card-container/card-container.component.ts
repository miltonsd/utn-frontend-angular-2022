import { Component } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';

// RXJS
import {
  Subject,
  BehaviorSubject,
  Observable,
  tap,
  map,
  takeUntil,
} from 'rxjs';

import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
})
export class CardContainerComponent {
  heroes: Hero[] = [];

  private _destroy$ = new Subject<void>();

  constructor(private _heroes: HeroesService) {
    // this.subscribeHeroes()
    //   .pipe(
    //     takeUntil(this._destroy$),
    //     tap((heroes: Hero[]) => {
    //       console.log('tab', heroes);
    //     })
    //     // map((heroes: Hero[]) => {
    //     //   return [...heroes, { id: 22, name: 'Tornado Magic Added' }];
    //     // })
    //   )
    //   .subscribe({
    //     next: (heroes: Hero[]) => {
    //       console.log(heroes);
    //       this.heroes = heroes;
    //     },
    //     error: (message: any) => {
    //       console.log(message);
    //     },
    //     complete: () => {
    //       console.log('complete');
    //     },
    //   });
    this._heroes.heroes().subscribe({
      next: (heroes: Hero[]) => {
        console.log(heroes);
        this.heroes = heroes;
      },
    });
    // this._heroes.heroes().subscribe((heroes: Hero[]) => {
    //   console.log(heroes);
    //   this.heroes = heroes;
    // }, (error) => {}, () => {});
  }

  // subscribeHeroes(): Observable<Hero[]> {
  //   return this.heroes$.asObservable();
  // }

  addHero(): void {
    // this.heroes$
    // const hero: Hero = { id: 21, name: 'Tornado Magic' };
    // const heroes = [...this.heroes];
    // heroes.push(hero);
    // if (false) {
    //   this.heroes$.next(heroes);
    // } else {
    //   this.heroes$.error('error');
    // }
    // this.heroes$.next(heroes);
    // this.heroes$.complete();

    const hero: Hero = { id: Math.random(), name: 'Tornado Magic' };
    this._heroes.addHero(hero);
  }

  stopSubscription(): void {
    // this._destroy$.complete();
  }

  // removeChild(hero: any): void {
  //   // console.log('removed', hero);
  //   const filtered = this.heroes.filter((item: Hero) => item.id !== hero.id);
  //   this.heroes$.next(filtered);
  // }
}
