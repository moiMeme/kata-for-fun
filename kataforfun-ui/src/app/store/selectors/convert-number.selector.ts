import {AppState} from '../states/app.state';
import {createSelector} from '@ngrx/store';

export const selectConvertNumberState$ = (state: AppState) => state.convertNumber;
export const getResult$ = createSelector(selectConvertNumberState$, state => state.results);
