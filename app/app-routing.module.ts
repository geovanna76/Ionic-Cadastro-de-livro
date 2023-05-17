import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tela-teste/:titulo/:autor/:personagem/:paginas/:categoria',    //tela2, no path tambem definimos os valores a serem passados
    loadChildren: () => import('./tela-teste/tela-teste.module').then( m => m.TelaTestePageModule)
  },
  {
    path: 'tela-agradecimento', //tela3
    loadChildren: () => import('./tela-agradecimento/tela-agradecimento.module').then( m => m.TelaAgradecimentoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
