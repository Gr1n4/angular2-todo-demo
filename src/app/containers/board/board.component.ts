import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  template: require('pug-loader!./board.component.pug')(),
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
