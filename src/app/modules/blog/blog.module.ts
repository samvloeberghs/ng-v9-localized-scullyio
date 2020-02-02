import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyContentModule } from '@scullyio/ng-lib';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyContentModule],
})
export class BlogModule {}
