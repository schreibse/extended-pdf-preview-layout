import { Route } from '@angular/router';
import { DocumentsMainComponent } from './documents-main/documents-main.component';

export default [
  {
    path: '',
    component: DocumentsMainComponent,
    children: [
      {
        path: ':id',
        component: DocumentsMainComponent,
      },
    ],
  },
] satisfies Route[];
