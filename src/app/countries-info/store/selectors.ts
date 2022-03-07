import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { DropdownValue } from 'src/app/shared/models/dropdownvalue.model';
import { RegionWiseCountryState } from './region-country.state';
import { RegionState } from './region.state';
export const RegionList = [{
  "label": "Asia",
  "value": "asia"
},
{
    "label": "Europe",
    "value": "europe"
}]
export const countryStoreName = 'Country-Region';
export const selectCountryStore = createFeatureSelector<RegionWiseCountryState>(countryStoreName);
export const selectRegionStore = createFeatureSelector<RegionState>(countryStoreName);

export const selectLoading = createSelector(
  selectCountryStore,
  (state: RegionWiseCountryState) => state.loading
);

export const selectCountries = createSelector(
  selectCountryStore,
  (state: RegionWiseCountryState) =>{
    const allCountryDropdownValues: DropdownValue[] = []; 
    const allRegionsWiseCountry = state.regions.filter(item=> item.name === state.currentAction).map(item=> item.countries)[0];
    if(allRegionsWiseCountry){
      allRegionsWiseCountry.map(ele=>{
        allCountryDropdownValues.push({value: ele.numericCode, label: ele.name})
      });
    };
    return allCountryDropdownValues;
  }
);

export const getCountriesDetails = createSelector(
  selectCountryStore,
  (state: RegionWiseCountryState) =>
    state.regions.filter(item=> item.name === state.currentAction).map(item=> item.countries)[0]
);


export const allRegions = createSelector(
  selectRegionStore,
  (state: RegionState) => { return RegionList}
);

