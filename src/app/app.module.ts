import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// Components
import { PruebaComponent } from './components/prueba/prueba.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { FeaturesComponent } from './components/features/features.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeFeatComponent } from './components/home-feat/home-feat.component';
import { HomePriComponent } from './components/home-pri/home-pri.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
// Directive
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
// Modules
// import { FeaturesModule } from './modules/features/features.module';
import { PricingModule } from './modules/pricing/pricing.module';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    NavbarComponent,
    CardComponent,
    CustomDirectiveDirective,
    CardContainerComponent,
    FeaturesComponent,
    PricingComponent,
    NotfoundComponent,
    HomeFeatComponent,
    HomePriComponent,
    CardDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, PricingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
