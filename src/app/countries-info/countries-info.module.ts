import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './components/country/country.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { CountriesInfoRoutingModule } from './countries-info-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { countryReducer } from './store/reducer';
import { CountryEffects } from './store/effects';
import { CountriesInfoService } from './service/countries-info.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CountryComponent,
    CountryDetailsComponent
  ],
  imports: [
    CommonModule,
    CountriesInfoRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forFeature('Country-Region', countryReducer),
    EffectsModule.forFeature([CountryEffects]),
  ],
  providers:[CountriesInfoService]
})
export class CountriesInfoModule { }
