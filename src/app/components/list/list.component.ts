import {Component, Input, Output} from '@angular/core';
import {List} from '../../models/list';

@Component({
  selector: 'app-list',
  template: require('pug-loader!./list.component.pug')(),
  styleUrls: ['./list.component.sass']
})
export class ListComponent {
  @Input() list: List;

}
