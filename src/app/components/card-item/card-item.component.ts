import { Component, OnInit, Input } from '@angular/core';

import {Card} from '../../models/card';

@Component({
  selector: 'app-card-item',
  template: require('pug-loader!./card-item.component.pug')(),
  styleUrls: ['./card-item.component.sass']
})
export class CardItemComponent implements OnInit {
  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

}
