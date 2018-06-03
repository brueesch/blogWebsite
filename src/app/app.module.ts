import {AppComponent} from './app.component';
import {CardComponent} from './elements/card/card.component';
import {ContentComponent} from './views/content.component';
import {FooterComponent} from './views/footer/footer.component';
import {HeaderComponent} from './views/header/header.component';
import {TravelBlogComponent} from './views/travel-blog/travel-blog.component';

import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {NgxsModule} from '@ngxs/store';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    TravelBlogComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    NgxsModule.forRoot([]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
