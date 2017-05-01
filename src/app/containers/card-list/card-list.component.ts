import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  template: require('pug-loader!./card-list.component.pug')(),
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
