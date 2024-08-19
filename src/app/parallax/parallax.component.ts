// parallax.component.ts
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollPosition = window.pageYOffset;
    const parallaxBackground = document.querySelector('.parallax-background') as HTMLElement;
    parallaxBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  }
}