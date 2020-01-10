import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { DetailComponent } from './detail/detail.component';
import { ArchiveComponent } from './archive/archive.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
  {
    path: 'archive',
    component: ArchiveComponent,
  },
  {
    path: ':id/:slug',
    component: DetailComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // LocalizeRouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
    // LocalizeRouterModule,
  ],
})
export class NewsRoutingModule {
}
