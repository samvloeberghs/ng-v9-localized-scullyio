import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IdleMonitorService } from '@scullyio/ng-lib';
import { Subject } from 'rxjs';

import { LanguageService, languageType } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  private readonly unsubscribe = new Subject<void>();

  constructor(
    private readonly languageService: LanguageService,
    // private readonly localizeRouterService: LocalizeRouterService,
    private readonly translateService: TranslateService,
    private readonly idleMonitorService: IdleMonitorService,
  ) {
    this.init();
    this.listenToLanguageChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public setLanguage($event, lang: languageType) {
    $event.preventDefault();
    this.languageService.setCurrentLanguage(lang);
  }

  private init(): void {
    // const currentLang = <languageType> this.localizeRouterService.parser.currentLang;
    const currentLang = 'en';
    this.languageService.setCurrentLanguage(currentLang);
  }

  private listenToLanguageChanges() {
    this.languageService.currentLanguage$.pipe().subscribe(lang => {
      // this.languageService.currentLanguage$.pipe(skip(1)).subscribe(lang => {
      // this.localizeRouterService.changeLanguage(lang);
      this.translateService.use(lang);
    });
  }
}
