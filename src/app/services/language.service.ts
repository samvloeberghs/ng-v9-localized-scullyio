import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type languageType = 'en' | 'nl';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public readonly currentLanguage$;

  private readonly currentLanguage = new BehaviorSubject<languageType>('en');

  constructor() {
    this.currentLanguage$ = this.currentLanguage.asObservable();
  }

  public setCurrentLanguage(lang: languageType) {
    this.currentLanguage.next(lang);
  }
}
