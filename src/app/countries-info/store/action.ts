import { createAction, props } from '@ngrx/store';
import { Region } from '../models/region.model';

export const getAllCountriesByRegionAction = createAction('[countries] get countries', props<{ region: string }>());
export const getAllCountriesByRegionSuccessAction = createAction(
  '[countries] get countries Success',
  props<{ payload: Region }>()
);

export const countriesErrorAction = createAction(
  '[countries] countries Error',
  props<{ payload: any }>()
);
