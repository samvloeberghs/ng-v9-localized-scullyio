import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MyMissingTranslationHandler } from './services/missing-translation-handler';
import { environment } from '../environments/environment';
import { NotFoundComponent } from './components/not-found/not-found.component';

export function createTranslateLoader(prefix = '') {
  return (http: HttpClient) => {
    return new TranslateHttpLoader(http, `${environment.url}/assets/i18n/${prefix}`, '.json');
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MyMissingTranslationHandler,
      },
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader()),
        deps: [HttpClient],
      },
    }),
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
