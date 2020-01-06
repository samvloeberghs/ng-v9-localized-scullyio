import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewComponent } from './overview/overview.component';
import { DetailComponent } from './detail/detail.component';
import { NewsRoutingModule } from './news-routing.module';

@NgModule({
  declarations: [OverviewComponent, DetailComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
  ],
})
export class NewsModule {
}
