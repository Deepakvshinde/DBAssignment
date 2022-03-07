import * as countryAction from './action';
import { createReducer, on, Action } from '@ngrx/store';
import { RegionWiseCountryState } from './region-country.state';

export const initialState: RegionWiseCountryState = {
  regions: [],
  currentAction: '',
  loading: false,
};

const countryReducerInternal = createReducer(
  initialState,
  on(
    countryAction.getAllCountriesByRegionAction,
    countryAction.getAllCountriesByRegionSuccessAction,
    countryAction.countriesErrorAction,
    (state) => ({
      ...state,
      loading: true,
    })
  ),
  on(countryAction.getAllCountriesByRegionSuccessAction, (state, { payload }) => ({
    ...state,
    loading: false,
    currentAction: payload.name,
    regions: [...state.regions, payload]
  }))
);

export function countryReducer(
  state: RegionWiseCountryState | undefined,
  action: Action
): any {
  return countryReducerInternal(state, action);
}
