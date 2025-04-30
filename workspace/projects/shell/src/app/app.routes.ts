import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'mf-a',
        loadComponent: () =>
            loadRemoteModule({
                remoteName: 'mf-a',
                exposedModule: './Component',
            }).then((m) => m.AppComponent),
    },
    {
        path: 'mf-b',
        loadComponent: () =>
            loadRemoteModule({
                remoteName: 'mf-b',
                exposedModule: './Component',
            }).then((m) => m.AppComponent),
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];