import { Component, HostBinding } from '@angular/core';

@Component({
  templateUrl: './blog-view.component.html'
})
export class BlogViewComponent {
  @HostBinding('class.bw-blog-view') theme = true;

}
