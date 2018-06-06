import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ContentComponent} from './views/content.component';
import {TravelBlogComponent} from './views/travel-blog/travel-blog.component';
import {BlogEntryComponent} from './views/blog-entry/blog-entry.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {path: '', redirectTo: 'travel-blog', pathMatch: 'full'},
      {
        path: '', component: ContentComponent,
        children: [
          {path: 'travel-blog', component: TravelBlogComponent},
          {path: 'blog-entry', component: BlogEntryComponent}
        ]
      },
      {path: '**', redirectTo: 'travel-blog', pathMatch: 'full'},
    ],
    {enableTracing: false} // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }
}
