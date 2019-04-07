export interface Gallery {
  photos: Photo[];
}

export interface Photo {
  thumb: string;
  image: string;
  isSelected?: boolean;
}
