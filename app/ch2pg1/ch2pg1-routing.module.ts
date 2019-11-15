import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ch2pg1Page } from './ch2pg1.page';

const routes: Routes = [
  {
    path: '',
    component: Ch2pg1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ch2pg1PageRoutingModule {}
