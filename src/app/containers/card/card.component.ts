import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: require('pug-loader!./card.component.pug')(),
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
