import {ActionReducerMap, StoreModule} from '@ngrx/store';
// @ts-ignore
import { EffectsModule } from '@ngrx/effects';
import { InjectionToken } from '@angular/core';

import { convertNumberReducer } from './reducers/convert-number.reducer';
import {ConvertNumberEffects} from './effects/convert-number.effect';
import {AppState} from './states/app.state';

const reducers = {
  convertNumber: convertNumberReducer
};

export const effects = [ConvertNumberEffects];

// tslint:disable-next-line:typedef
export function getReducers() {
  return reducers;
}
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export const StoreModuleApply = {
  imports: [
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot(effects),
  ],
  providers: [
    { provide: REDUCER_TOKEN, useFactory: getReducers }
  ]
};
