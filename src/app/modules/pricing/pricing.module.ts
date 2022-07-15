import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePricingComponent } from './components/home-pricing/home-pricing.component';

@NgModule({
  declarations: [HomePricingComponent],
  imports: [CommonModule],
  exports: [HomePricingComponent],
})
export class PricingModule {}
