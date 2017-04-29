import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: require('pug-loader!./header.component.pug')(),
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
}
