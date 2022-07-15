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

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
})
export class CardContainerComponent {
  heroes: Hero[] = [];

  heroes$ = new BehaviorSubject([
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
  ]);

  private _destroy$ = new Subject<void>();

  constructor() {
    this.subscribeHeroes()
      .pipe(
        takeUntil(this._destroy$),
        tap((heroes: Hero[]) => {
          console.log('tab', heroes);
        })
        // map((heroes: Hero[]) => {
        //   return [...heroes, { id: 22, name: 'Tornado Magic Added' }];
        // })
      )
      .subscribe({
        next: (heroes: Hero[]) => {
          console.log(heroes);
          this.heroes = heroes;
        },
        error: (message: any) => {
          console.log(message);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

  subscribeHeroes(): Observable<Hero[]> {
    return this.heroes$.asObservable();
  }

  addHero(): void {
    // this.heroes$
    const hero: Hero = { id: 21, name: 'Tornado Magic' };
    const heroes = [...this.heroes];
    heroes.push(hero);

    // if (false) {
    //   this.heroes$.next(heroes);
    // } else {
    //   this.heroes$.error('error');
    // }
    this.heroes$.next(heroes);
    // this.heroes$.complete();
  }

  stopSubscription(): void {
    console.log('stop');

    this._destroy$.complete();
  }

  removeChild(hero: any): void {
    // console.log('removed', hero);
    const filtered = this.heroes.filter((item: Hero) => item.id !== hero.id);
    this.heroes$.next(filtered);
  }
}
