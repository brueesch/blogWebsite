import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'bw-content',
  templateUrl: './content.component.html'
})
export class ContentComponent {

  @HostBinding('class.bw-content') theme = true;

}
