import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-thumb',
  templateUrl: './photo-thumb.component.html',
  styleUrls: ['./photo-thumb.component.scss']
})
export class PhotoThumbComponent {
  @Input() photoUrl: string;
  @Input() isSelected: boolean;
}
