import { Component } from '@angular/core';
import { PdfService } from '../pdf.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  constructor(private pdfService: PdfService) {}

  onButtonClick() {
    const pdfUrl = 'https://res.cloudinary.com/dukugsekf/image/upload/v1722420857/PDFs/cfxtbyypptll2egb4wx5.pdf'; // Remplacez 'URL_DU_PDF' par l'URL de votre PDF
    this.pdfService.setPdfUrl(pdfUrl);
  }
}