import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
// Components
import { HomeFeaturesComponent } from './components/home-features/home-features.component';
// Directives
import { Custome2Directive } from './directives/custome2.directive';

@NgModule({
  declarations: [HomeFeaturesComponent, Custome2Directive],
  imports: [CommonModule, FeaturesRoutingModule],
  exports: [HomeFeaturesComponent],
})
export class FeaturesModule {}
