import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'bw-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  @HostBinding('class.bw-footer') theme = true;


}
