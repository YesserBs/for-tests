import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserTypeComponent } from './components/user-type/user-type.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTypeComponent,
    PdfViewerComponent,
    SafeUrlPipe,
    ButtonComponent,
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
