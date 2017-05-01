import {Component, Input, Output} from '@angular/core';
import {List} from '../../models/list';
import {CardService} from '../../services/card.service';

@Component({
  selector: 'app-list',
  template: require('pug-loader!./list.component.pug')(),
  styleUrls: ['./list.component.sass']
})
export class ListComponent {
  @Input() list: List;

  constructor(private cardService: CardService) {}

  createCard(title) {
    this.cardService.createCard(title, this.list.id);
  }
}
