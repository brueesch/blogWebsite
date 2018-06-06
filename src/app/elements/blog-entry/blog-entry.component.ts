import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'bw-blog-entry',
  templateUrl: './blog-entry.component.html'
})
export class BlogEntryComponent {
  @HostBinding('class.bw-blog-entry') theme = true;

  @Input() storyTitle : string;
  @Input() image1:string;
  @Input() image2:string;
  @Input() image3:string;
  @Input() location:string;
  @Input() map:string;
  @Input() subtitle1:string;
  @Input() subtitle2:string;
  @Input() subtitle3:string;

}
