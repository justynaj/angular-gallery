import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotoThumbComponent } from './photo-thumb/photo-thumb.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [AppComponent, GalleryComponent, PhotoThumbComponent, PhotoComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
