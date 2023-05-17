import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaTestePage } from './tela-teste.page';

const routes: Routes = [
  {
    path: '',
    component: TelaTestePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaTestePageRoutingModule {}
