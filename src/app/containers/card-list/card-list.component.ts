import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ICard} from '../../models/card';
import {CardService} from '../../services/card.service';

@Component({
  selector: 'app-card-list',
  template: require('pug-loader!./card-list.component.pug')(),
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {
  @Input() listId: number;
  cards$: Observable<ICard[]>;
  cards: ICard[];

  constructor(
    private cardService: CardService
  ) {}

  ngOnInit() {
    this.cards$ = this.cardService.getCardsByListId(this.listId);
    this.cards$.subscribe(cards => this.cards = cards);
  }

}
