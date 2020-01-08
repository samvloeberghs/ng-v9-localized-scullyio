import { NgModule } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  LocalizeParser,
  LocalizeRouterModule,
  LocalizeRouterSettings,
  ManualParserLoader,
} from '@gilsdav/ngx-translate-router';
import { Location } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export function createLocalizeRouterLoader(
  translateService: TranslateService,
  location: Location,
  localizeRouterSettings: LocalizeRouterSettings,
) {
  return new ManualParserLoader(
    translateService, location, localizeRouterSettings, ['en', 'nl'], 'ROUTES.', '!',
  );
}

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'news',
    loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule),
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: createLocalizeRouterLoader,
        deps: [TranslateService, Location, LocalizeRouterSettings],
      },
    }),
  ],
  exports: [
    RouterModule,
    LocalizeRouterModule,
  ],
})
export class AppRoutingModule {
}
