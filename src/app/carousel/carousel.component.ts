import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  items = [
    'assets/main2-bg.jpg',
    'assets/main2-bg.jpg',
    'assets/main2-bg.jpg'
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
      console.log('Waiwa!');
    }, 4000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  prev() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.items.length - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex < this.items.length - 1) ? this.currentIndex + 1 : 0;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}