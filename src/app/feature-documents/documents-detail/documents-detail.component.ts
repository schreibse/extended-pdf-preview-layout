import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DocumentsMetadataComponent } from '../documents-metadata/documents-metadata.component';

@Component({
  selector: 'feature-documents-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    DocumentsMetadataComponent
  ],
  templateUrl: './documents-detail.component.html',
  styleUrl: './documents-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentsDetailComponent {
}
