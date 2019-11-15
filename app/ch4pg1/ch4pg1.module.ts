import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ch4pg1PageRoutingModule } from './ch4pg1-routing.module';

import { Ch4pg1Page } from './ch4pg1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ch4pg1PageRoutingModule
  ],
  declarations: [Ch4pg1Page]
})
export class Ch4pg1PageModule {}
