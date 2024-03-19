import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IdentityComponent } from './components/modules/identity/identity.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'identity',
        component: IdentityComponent
    }
];
