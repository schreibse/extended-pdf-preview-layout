import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { DocumentPreviewComponent } from '../document-preview/document-preview.component';


@Component({
  selector: 'feature-documents-metadata',
  standalone: true,
  imports: [
    CommonModule,
    DocumentPreviewComponent
  ],
  templateUrl: './documents-metadata.component.html',
  styleUrl: './documents-metadata.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentsMetadataComponent {
}
