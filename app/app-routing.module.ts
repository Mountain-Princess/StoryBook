import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cover-page',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'toc',
    loadChildren: () => import('./toc/toc.module').then( m => m.TocPageModule)
  },
  {
    path: 'chapter1',
    loadChildren: () => import('./chapter1/chapter1.module').then( m => m.Chapter1PageModule)
  },
  {
    path: 'chapter2',
    loadChildren: () => import('./chapter2/chapter2.module').then( m => m.Chapter2PageModule)
  },
  {
    path: 'chapter3',
    loadChildren: () => import('./chapter3/chapter3.module').then( m => m.Chapter3PageModule)
  },
  {
    path: 'chapter4',
    loadChildren: () => import('./chapter4/chapter4.module').then( m => m.Chapter4PageModule)
  },
  {
    path: 'cover-page',
    loadChildren: () => import('./cover-page/cover-page.module').then( m => m.CoverPagePageModule)
  },
  {
    path: 'ch1pg1',
    loadChildren: () => import('./ch1pg1/ch1pg1.module').then( m => m.Ch1pg1PageModule)
  },
  {
    path: 'ch2pg1',
    loadChildren: () => import('./ch2pg1/ch2pg1.module').then( m => m.Ch2pg1PageModule)
  },
  {
    path: 'ch3pg1',
    loadChildren: () => import('./ch3pg1/ch3pg1.module').then( m => m.Ch3pg1PageModule)
  },
  {
    path: 'ch4pg1',
    loadChildren: () => import('./ch4pg1/ch4pg1.module').then( m => m.Ch4pg1PageModule)
  },
  {
    path: 'end',
    loadChildren: () => import('./end/end.module').then( m => m.EndPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
