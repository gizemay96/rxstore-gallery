import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  isLightBoxOpen: boolean = false;
  selectedImg;
  progress: boolean = false;

  gallery = [
    'https://unsplash.it/1100/700.jpg',
    'https://unsplash.it/1204/1201.jpg',
    'https://unsplash.it/1501/1202.jpg',
    'https://unsplash.it/1307/1703.jpg',
    'https://unsplash.it/999/704.jpg',
    'https://unsplash.it/599/704.jpg',
    'https://unsplash.it/1899/1204.jpg',
    'https://unsplash.it/1099/2004.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}

  openLightBox(index) {
    this.isLightBoxOpen = true;
    this.selectedImg = index;
    this.startSlide();
  }

  startSlide() {
    if (this.isLightBoxOpen) {
      this.progress = true;
      setTimeout(() => {
        console.log(this.selectedImg);
        if (this.selectedImg < this.gallery.length - 1) {
          this.selectedImg = this.selectedImg + 1;
        } else {
          this.selectedImg = 0;
        }
        this.progress = false;
        this.startSlide();
      }, 8000);
    } else {
      return;
    }
  }

  nextImg(activeIndx) {
    let newIndex = activeIndx + 1;
    if (newIndex >= this.gallery.length) {
      this.selectedImg = 0;
    } else {
      this.selectedImg = newIndex;
    }
  }

  previousImg(activeIndx) {
    let newIndex = activeIndx - 1;
    if (newIndex < 0) {
      let length = this.gallery.length - 1;
      this.selectedImg = length;
    } else {
      this.selectedImg = newIndex;
    }
  }
}
