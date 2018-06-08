import { Component, HostBinding } from '@angular/core';

@Component({
  templateUrl: './travel-blog.component.html'
})
export class TravelBlogComponent {
  @HostBinding('class.bw-travel-blog') theme = true;

}
