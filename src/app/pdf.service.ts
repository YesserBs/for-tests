import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private pdfUrlSubject = new BehaviorSubject<string>(''); // URL initiale vide
  pdfUrl$ = this.pdfUrlSubject.asObservable();

  setPdfUrl(url: string) {
    this.pdfUrlSubject.next(url);
  }

  clearPdfUrl() {
    this.pdfUrlSubject.next('');
  }
}