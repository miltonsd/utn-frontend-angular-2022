import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
// Components
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CharactersComponent } from './components/characters/characters.component';
// import { FeaturesComponent } from './components/features/features.component';
import { HomeFeatComponent } from './components/home-feat/home-feat.component';
import { HomePriComponent } from './components/home-pri/home-pri.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PricingComponent } from './components/pricing/pricing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full',
  },
  {
    path: 'cards',
    component: CardContainerComponent,
    children: [
      {
        path: ':cardId',
        component: CardDetailsComponent,
      },
      {
        path: 'feat',
        component: HomeFeatComponent,
      },
      {
        path: 'pri',
        component: HomePriComponent,
      },
    ],
  },
  {
    path: 'features',
    loadChildren: () =>
      import('./modules/features/features.module').then(
        (m) => m.FeaturesModule
      ),
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'pricing',
    component: PricingComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
