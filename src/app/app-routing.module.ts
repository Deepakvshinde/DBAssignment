import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
    },
    {
        path: 'countries',
        loadChildren: () => import('./countries-info/countries-info.module').then(module => module.CountriesInfoModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
