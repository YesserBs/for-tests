import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { ParallaxBackgroundComponent } from './parallax-background/parallax-background.component';
import { ParallaxComponent } from './parallax/parallax.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    CarouselComponent,
    ImageCarouselComponent,
    ParallaxBackgroundComponent,
    ParallaxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
