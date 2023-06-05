import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {KataForFunFormComponent} from './kata-for-fun-form/kata-for-fun-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {KataForFunComponent} from './kata-for-fun/kata-for-fun.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FrontEndInstructionComponent} from './front-end-instruction/front-end-instruction.component';
import {BackEndInstructionComponent} from './back-end-instruction/back-end-instruction.component';

import {StoreModule} from '@ngrx/store';
import {getReducers, REDUCER_TOKEN, StoreModuleApply} from './store';

export const declarations = [
  AppComponent,
  KataForFunFormComponent,
  KataForFunComponent,
  HomeComponent,
  NavBarComponent,
  FrontEndInstructionComponent,
  BackEndInstructionComponent
];
export const imports = [
  BrowserModule, ReactiveFormsModule, HttpClientModule, StoreModule.forRoot(REDUCER_TOKEN), StoreModuleApply.imports,
  RouterModule.forRoot([
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'kataforfun', component: KataForFunComponent}
  ]),
];
export const providers = [
  {provide: 'SERVER_URL', useValue: 'http://localhost:8080'},
  {provide: REDUCER_TOKEN, useFactory: getReducers}
];

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    ...imports
  ],
  providers: [
    ...providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
