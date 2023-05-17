import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaAgradecimentoPage } from './tela-agradecimento.page';

const routes: Routes = [
  {
    path: '',
    component: TelaAgradecimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaAgradecimentoPageRoutingModule {}
