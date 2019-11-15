import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ch1pg1Page } from './ch1pg1.page';

const routes: Routes = [
  {
    path: '',
    component: Ch1pg1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ch1pg1PageRoutingModule {}
