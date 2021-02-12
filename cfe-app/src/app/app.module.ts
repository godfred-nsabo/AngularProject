import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageListComponent } from './image-list/image-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({ //decorator
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent,
    ImageDetailComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [VideoListComponent, AppComponent, VideoDetailComponent] 
})
export class AppModule { }


//Creating a new component = ng g component <name of component>