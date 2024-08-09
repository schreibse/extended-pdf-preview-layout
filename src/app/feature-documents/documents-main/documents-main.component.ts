import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  RouterOutlet,
} from '@angular/router';
import { DocumentsDetailComponent } from "../documents-detail/documents-detail.component";


@Component({
  selector: 'lib-feature-documents-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DocumentsDetailComponent
],
  templateUrl: './documents-main.component.html',
  styleUrl: './documents-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentsMainComponent {
}
