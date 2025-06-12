import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./Components/home/home').then(m => m.HomeComponent)
    },
    {
        path: 'extrañar-voz',
        loadComponent: () => import('./Components/extranar-voz/extranar-voz').then(m => m.ExtranarVoz)
    },
    {
        path: 'dormir',
        loadComponent: () => import('./Components/dormir-tranquila/dormir-tranquila').then(m => m.DormirTranquila)
    },
    {
        path: 'dudas',
        loadComponent: () => import('./Components/dudas-amor/dudas-amor').then(m => m.DudasAmor)
    },
    {
        path: 'reir',
        loadComponent: () => import('./Components/hacer-reir/hacer-reir').then(m => m.HacerReir)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
