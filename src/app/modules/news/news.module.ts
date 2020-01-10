import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { OverviewComponent } from './overview/overview.component';
import { DetailComponent } from './detail/detail.component';
import { NewsRoutingModule } from './news-routing.module';
import { ArchiveComponent } from './archive/archive.component';
import { MyMissingTranslationHandler } from '../../services/missing-translation-handler';
import { LanguageService } from '../../services/language.service';
import { environment } from '../../../environments/environment';

export function createTranslateLoader(prefix = '') {
  return (http: HttpClient) => {
    return new TranslateHttpLoader(http, `${environment.url}/assets/i18n/${prefix}`, '.json');
  };
}
@NgModule({
  declarations: [OverviewComponent, DetailComponent, ArchiveComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader('news/')),
        deps: [
          HttpClient
        ]
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MyMissingTranslationHandler
      },
      isolate: true
    }),
    NewsRoutingModule,
  ],
})
export class NewsModule {
  constructor(
    private readonly languageService: LanguageService,
    private readonly translateService: TranslateService,
    // private readonly localizeRouterService: LocalizeRouterService
  ) {
    languageService.currentLanguage$.subscribe((lang) => {
      translateService.use(lang);
      // localizeRouterService.changeLanguage(lang);
    });
  }
}
