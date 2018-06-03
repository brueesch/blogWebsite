import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'bw-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @HostBinding('class.bw-app') theme = true;
}
