import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFeaturesComponent } from './components/home-features/home-features.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeFeaturesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
