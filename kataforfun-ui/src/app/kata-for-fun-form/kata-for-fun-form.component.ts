import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppState} from '../store/states/app.state';
import {Store} from '@ngrx/store';
import {ConvertNumberModule} from '../store/actions/convert-number.action';

@Component({
  selector: 'app-kata-for-fun-form',
  templateUrl: './kata-for-fun-form.component.html'
})
export class KataForFunFormComponent implements OnInit {

  inputNumberForm = this.fb.group({
    inputNumber: ['', Validators.required]
  });
  constructor(private store$: Store<AppState>, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  submitNumber(): void {
    this.store$.dispatch(new ConvertNumberModule.ConvertNumber(this.inputNumberForm.value.inputNumber));
    this.inputNumberForm.reset();
  }

}
