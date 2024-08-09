import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


@Component({
  selector: 'feature-document-preview',
  standalone: true,
  imports: [
    CommonModule,
    NgxExtendedPdfViewerModule
  ],
  templateUrl: './document-preview.component.html',
  styleUrl: './document-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentPreviewComponent { 
  pdfSource = 'example.pdf'

  handleLoadComplete() {
  }
}
