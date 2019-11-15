import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ch3pg1PageRoutingModule } from './ch3pg1-routing.module';

import { Ch3pg1Page } from './ch3pg1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ch3pg1PageRoutingModule
  ],
  declarations: [Ch3pg1Page]
})
export class Ch3pg1PageModule {}
