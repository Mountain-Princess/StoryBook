import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ch1pg1PageRoutingModule } from './ch1pg1-routing.module';

import { Ch1pg1Page } from './ch1pg1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ch1pg1PageRoutingModule
  ],
  declarations: [Ch1pg1Page]
})
export class Ch1pg1PageModule {}
