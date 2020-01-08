import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams): string {
    return `TODO: ${params.key}`;
  }
}