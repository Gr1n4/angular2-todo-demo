import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {StoreModule} from '@ngrx/store';
import {RouterStoreModule} from '@ngrx/router-store';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CounterComponent } from './containers/counter/counter.component';

import {routes} from './routes';
import {reducer} from './reducers';
import { BoardComponent } from './containers/board/board.component';
import { CardComponent } from './containers/card/card.component';
import { TaskComponent } from './containers/task/task.component';
import { BoardListComponent } from './containers/board-list/board-list.component';

import {HeaderComponent} from './components/header/header.component';
import { BoardItemComponent } from './components/board-item/board-item.component';

@NgModule({
  declarations: [
    // Containers
    AppComponent,
    CounterComponent,
    BoardComponent,
    CardComponent,
    TaskComponent,
    BoardListComponent,
    // Components
    HeaderComponent,
    BoardItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(routes, {useHash: false}),
    NgbModule.forRoot(),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
