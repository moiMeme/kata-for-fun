import {ResultWrapper} from '../../model/result';

// tslint:disable-next-line:no-namespace
export namespace ConvertNumberModule {

  export enum ActionTypes {
    CONVERT_NUMBER = '[KataForFun] Convert Number',
    SUCCESS_CONVERT_NUMBER = '[KataForFun] Success Convert Number',
    ERROR_LOAD_ACTION = '[KataForFun] Error Load Action'
  }

  export class ConvertNumber {
    readonly type = ActionTypes.CONVERT_NUMBER;
    constructor(public inputNumber: number) {}
  }

  export class SuccessConvertNumber {
    readonly type = ActionTypes.SUCCESS_CONVERT_NUMBER;
    constructor(public results: ResultWrapper[]) {}
  }
  export class ErrorLoadAction {
    readonly type = ActionTypes.ERROR_LOAD_ACTION;
    constructor(public error: any, public inputNumber: number) {}
  }

  export type Actions = ConvertNumber
    | SuccessConvertNumber
    | ErrorLoadAction;

}
