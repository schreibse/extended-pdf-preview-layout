import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'feature-document-preview2',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './document-preview2.component.html',
  styleUrl: './document-preview2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentPreview2Component {
  readonly #httpClient = inject(HttpClient);
  readonly #sanitizer = inject(DomSanitizer);

  pdfSource = 'example.pdf'
  pdfSourceSafe = this.#sanitizer.bypassSecurityTrustResourceUrl('example.pdf');
  
  safePdf$: Observable<SafeResourceUrl | undefined>;

  private _dataUrl?: string;

  constructor() {
    this.safePdf$ = this.#httpClient.get(this.pdfSource, {responseType: 'blob'}).pipe(
      map((data) => {
        this._dataUrl = URL.createObjectURL(data);
        return this.#sanitizer.bypassSecurityTrustResourceUrl(`${this._dataUrl}`);
      }),
    );
  }

  handleLoadComplete() {
    if (this._dataUrl) {
      URL.revokeObjectURL(this._dataUrl);
      this._dataUrl = undefined;
    }
  }
}
