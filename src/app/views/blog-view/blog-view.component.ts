import { Component, HostBinding, OnInit, OnDestroy} from '@angular/core';
import {blogPosts} from '../../../assets/02_BlogPosts/blog-posts';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  templateUrl: './blog-view.component.html'
})
export class BlogViewComponent implements OnInit, OnDestroy {
  @HostBinding('class.bw-blog-view') theme = true;

  blogPost: any;

  constructor(private route: ActivatedRoute) {}

  subRoute: Subscription;

  ngOnInit() {
    this.subRoute = this.route.params.subscribe(params => {
      this.blogPost = blogPosts[+params.blogId];
    });
  }

  ngOnDestroy() {
    this.subRoute.unsubscribe();
  }
}
