import { Component, OnInit } from '@angular/core';
import { TestCase } from '../model/test-case';

@Component({
  selector: 'app-back-end-instruction',
  templateUrl: './back-end-instruction.component.html'
})
export class BackEndInstructionComponent implements OnInit {

  testCases: TestCase[] = [
    { input: 1, output: '1' },
    { input: 3, output: 'KataKata' },
    { input: 5, output: 'ForFor' },
    { input: 7, output: 'Fun' },
    { input: 9, output: 'Kata' },
    { input: 51, output: 'KataFor' },
    { input: 53, output: 'ForKata' },
    { input: 33, output: 'KataKataKata' },
    { input: 27, output: 'KataFun' },
    { input: 15, output: 'KataForFor' }];

  constructor() { }

  ngOnInit(): void {
  }

}
