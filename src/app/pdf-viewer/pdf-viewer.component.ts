import { Component, OnInit } from '@angular/core';
import { PdfService } from '../pdf.service';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  pdfUrl: string = '';

  constructor(private pdfService: PdfService) {}

  ngOnInit() {
    this.pdfService.pdfUrl$.subscribe(url => {
      this.pdfUrl = url;
    });
  }

  closePdf() {
    this.pdfUrl = '';
  }
}