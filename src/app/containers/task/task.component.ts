import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  template: require('pug-loader!./task.component.pug')(),
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
