import { Component, HostBinding } from '@angular/core';

@Component({
  templateUrl: './blog-entry.component.html'
})
export class BlogEntryComponent {
  @HostBinding('class.bw-blog-entry') theme = true;

}
