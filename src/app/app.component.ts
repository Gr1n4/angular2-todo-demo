import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: require('pug-loader!./app.component.pug')(),
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';
}
