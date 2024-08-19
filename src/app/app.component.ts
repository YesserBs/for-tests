// app.component.ts
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const layers = document.querySelectorAll('.parallax__layer');
    layers.forEach((layer) => {
      const depth = layer.getAttribute('data-depth');
      if (depth) {
        const movement = -(scrollTop * Number(depth));
        (layer as HTMLElement).style.transform = `translate3d(0, ${movement}px, 0)`;
      }
    });
  }
}