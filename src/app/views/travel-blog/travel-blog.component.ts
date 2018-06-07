import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';

@Component({
  templateUrl: './travel-blog.component.html'
})
export class TravelBlogComponent implements OnInit, OnDestroy {
  @HostBinding('class.bw-travel-blog') theme = true;

}
