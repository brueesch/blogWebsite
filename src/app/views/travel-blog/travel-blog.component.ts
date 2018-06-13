import { Component, HostBinding, OnInit } from '@angular/core';
import { blogPosts } from '../../../assets/02_BlogPosts/blog-posts';

@Component({
  templateUrl: './travel-blog.component.html'
})
export class TravelBlogComponent implements OnInit {
  @HostBinding('class.bw-travel-blog') theme = true;

  posts: any;

  ngOnInit() {
    this.posts = Object.values(blogPosts);
  }
}
