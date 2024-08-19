import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax-background',
  templateUrl: './parallax-background.component.html',
  styleUrls: ['./parallax-background.component.css']
})
export class ParallaxBackgroundComponent implements OnInit {

  ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const parallax = document.getElementById('parallax');
    if (parallax) {
      const offset = window.pageYOffset;
      // Ajuster la position de l'image pour qu'elle commence à défiler à partir du milieu
      parallax.style.backgroundPositionY = `calc(50% + ${offset * 0.5}px)`;
    }
  }
}