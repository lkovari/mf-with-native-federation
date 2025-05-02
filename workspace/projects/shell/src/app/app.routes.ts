import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ShellDefaultComponent } from './shared/components/default/shell-default.component';

export const routes: Routes = [
    {
        path: '',
        component: ShellDefaultComponent,
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
        path: 'info',
        component: HomeComponent
    },
    {
        path: 'default',
        component: ShellDefaultComponent
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];