import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ch2pg1PageRoutingModule } from './ch2pg1-routing.module';

import { Ch2pg1Page } from './ch2pg1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ch2pg1PageRoutingModule
  ],
  declarations: [Ch2pg1Page]
})
export class Ch2pg1PageModule {}
