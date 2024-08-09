import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./shell/shell.component').then((c) => c),
        children: [
            {
                path: 'documents',
                title: 'Documents',
                loadChildren: () => import('./feature-documents/documents.routes').then((r) => r),
            },
            {
                path: '',
                redirectTo: 'documents',
                pathMatch: 'full',
            },
        ]
    }
];

