import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { Gallery, Photo } from '../gallery.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public photos: Photo[];
  public mainPhotoUrl: string;

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
    this.getPhotos();
  }

  public selectPhoto(index: number): void {
    this.photos.map(photo => {
      photo.isSelected = false;
      return photo;
    });
    this.photos[index].isSelected = true;
    this.mainPhotoUrl = this.photos[index].image;
  }

  private getPhotos(): void {
    this.galleryService.getPhotosJson().subscribe((data: Gallery) => {
      if (data) {
        this.photos = data.photos;
        this.selectPhoto(0);
      }
    });
  }
}
