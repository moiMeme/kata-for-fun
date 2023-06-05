import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../states/app.state';
import {KataForFunService} from '../../kata-for-fun.service';
import {ConvertNumberModule} from '../actions/convert-number.action';
import {getResult$} from '../selectors/convert-number.selector';
import {ResultWrapper} from '../../model/result';
import {HttpErrorResponse} from '@angular/common/http';



@Injectable()
export class ConvertNumberEffects {

  constructor(
    private store$: Store<AppState>,
    private actions$: Actions,
    private kataForFunService: KataForFunService,
  ) {
  }

  convertNumber$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<ConvertNumberModule.ConvertNumber>(ConvertNumberModule.ActionTypes.CONVERT_NUMBER),
      map((action: ConvertNumberModule.ConvertNumber) => action),
      withLatestFrom(this.store$.pipe(select(getResult$))),
      mergeMap(([action, resultWrappers]) => {
        return this.kataForFunService.convert(action.inputNumber).pipe(
          map((result: any) => {

            const results: ResultWrapper[] = [...resultWrappers];
            if (result) {
              results.push({inputNumber: action.inputNumber, result, error:  ''});
            }
            return new ConvertNumberModule.SuccessConvertNumber(results);
          }),
          catchError((err: HttpErrorResponse) => of(new ConvertNumberModule.ErrorLoadAction(err, action.inputNumber)))
        );
      })
    );
  });


}
