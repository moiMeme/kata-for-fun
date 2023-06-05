import {ConvertNumberModule} from '../actions/convert-number.action';
import {convertNumberInitialState, ConvertNumberState} from '../states/convert-number.state';
import {ResultWrapper} from '../../model/result';


export function convertNumberReducer(state = convertNumberInitialState, action: ConvertNumberModule.Actions): ConvertNumberState {

  switch (action.type) {

    case ConvertNumberModule.ActionTypes.CONVERT_NUMBER:
      return {
        ...state,
        results: state.results
      };

    case ConvertNumberModule.ActionTypes.SUCCESS_CONVERT_NUMBER:
      return {
        ...state,
        results: action.results
      };

    case ConvertNumberModule.ActionTypes.ERROR_LOAD_ACTION:
      const resultWrappers: ResultWrapper[] = [...state.results];
      resultWrappers.push({inputNumber: action.inputNumber, result: null, error: action.error});
      return {
        ...state,
        results: resultWrappers
      };

    default:
      return state;
  }
}
