import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoThumbComponent } from './photo-thumb.component';

describe('PhotoThumbComponent', () => {
  let component: PhotoThumbComponent;
  let fixture: ComponentFixture<PhotoThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
