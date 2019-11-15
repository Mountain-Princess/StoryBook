import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ch4pg1Page } from './ch4pg1.page';

const routes: Routes = [
  {
    path: '',
    component: Ch4pg1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ch4pg1PageRoutingModule {}
