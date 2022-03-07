import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
} from 'rxjs/operators';
import { Country } from '../models/country.model';
import { CountriesInfoService } from '../service/countries-info.service';
import * as countryAction from './action';

@Injectable({
    providedIn: 'root'
  })
export class CountryEffects {
    constructor(
      private countryService: CountriesInfoService,
      private actions$: Actions
    ) {}
  
    getCountries$ = createEffect(() =>
      this.actions$.pipe(
        ofType(countryAction.getAllCountriesByRegionAction),
        switchMap((action) => 
          this.countryService.getAllCountriesByRegion(action.region).pipe(
            map((res) => countryAction.getAllCountriesByRegionSuccessAction({ payload : { name : action.region, countries: res }})),
            catchError(error => of(countryAction.countriesErrorAction(error)))
          )
        )
      )
    );
  }