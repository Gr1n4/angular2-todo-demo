import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  template: require('pug-loader!./card-item.component.pug')(),
  styleUrls: ['./card-item.component.sass']
})
export class CardItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
