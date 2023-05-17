import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaTestePageRoutingModule } from './tela-teste-routing.module';

import { TelaTestePage } from './tela-teste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaTestePageRoutingModule
  ],
  declarations: [TelaTestePage]
})
export class TelaTestePageModule {}
