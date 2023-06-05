import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectConvertNumberState$} from '../store/selectors/convert-number.selector';
import {tap} from 'rxjs/operators';
import {ResultWrapper} from '../model/result';
import {AppState} from '../store/states/app.state';
import {ConvertNumberState} from '../store/states/convert-number.state';

@Component({
  selector: 'app-kata-for-fun',
  templateUrl: './kata-for-fun.component.html'
})
export class KataForFunComponent implements OnInit, OnDestroy {

  public resultWrappers: ResultWrapper[];
  private observableConvertNumberState: Observable<ConvertNumberState>;
  public subscriptionForResults: Subscription;

  constructor(private store$: Store<AppState>) {
    this.resultWrappers = [];
  }

  ngOnInit(): void {
    this.observableConvertNumberState = this.store$.pipe(
      select(selectConvertNumberState$),
      tap((convertNumberState: ConvertNumberState)  => this.resultWrappers = convertNumberState?.results)
    );

    this.subscriptionForResults = this.observableConvertNumberState.subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptionForResults.unsubscribe();
  }


}
