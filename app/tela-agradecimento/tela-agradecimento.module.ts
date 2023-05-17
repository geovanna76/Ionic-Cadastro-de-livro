import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaAgradecimentoPageRoutingModule } from './tela-agradecimento-routing.module';

import { TelaAgradecimentoPage } from './tela-agradecimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaAgradecimentoPageRoutingModule
  ],
  declarations: [TelaAgradecimentoPage]
})
export class TelaAgradecimentoPageModule {}
