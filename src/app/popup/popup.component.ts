import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  isVisible = false;

  showRectangle() {
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
    }, 2000); // 2000ms = 2 seconds
  }
}
