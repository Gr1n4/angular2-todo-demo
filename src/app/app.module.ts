import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {StoreModule} from '@ngrx/store';
import {RouterStoreModule} from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { CounterComponent } from './containers/counter/counter.component';

import {routes} from './routes';
import {reducer} from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(routes, {useHash: false}),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
