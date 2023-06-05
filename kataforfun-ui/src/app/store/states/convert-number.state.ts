import {ResultWrapper} from '../../model/result';

export interface ConvertNumberState {
  results: ResultWrapper[];
}

export const convertNumberInitialState: ConvertNumberState = {
  results: [],
};
