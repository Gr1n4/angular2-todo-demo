import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: require('pug-loader!./app.component.pug')(),
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';
}
