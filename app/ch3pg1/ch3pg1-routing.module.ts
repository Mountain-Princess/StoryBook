import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ch3pg1Page } from './ch3pg1.page';

const routes: Routes = [
  {
    path: '',
    component: Ch3pg1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ch3pg1PageRoutingModule {}
