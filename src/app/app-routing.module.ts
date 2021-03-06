import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ContentComponent} from './views/content.component';
import {TravelBlogComponent} from './views/travel-blog/travel-blog.component';
//import {PortfolioComponent} from './views/portfolio/portfolio.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {path: '', redirectTo: 'travel-blog', pathMatch: 'full'},
      {
        path: '', component: ContentComponent,
        children: [
          {path: 'travel-blog', component: TravelBlogComponent},
          //{path: 'portfolio', component: PortfolioComponent}
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
