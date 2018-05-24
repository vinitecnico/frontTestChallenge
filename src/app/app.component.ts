import { Component, LOCALE_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

// service
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private router: Router,
    @Inject(LOCALE_ID) protected localeId: string,
    private translate: TranslateService,
    private localStorageService: LocalStorageService) {
    this.startLanguage();
  }

  private startLanguage(): void {
    let language = 'pt-BR';

    this.translate.setDefaultLang(language);
    const languageLocalStorage = this.localStorageService.getItem('language');

    if (languageLocalStorage && languageLocalStorage !== '') {
      language = languageLocalStorage;
    } else {
      if (this.localeId) {
        language = this.localeId;
      } else {
        language = navigator.language;
      }

      if (language.toLowerCase().indexOf('pt') > -1) {
        language = 'pt-BR';
      } else {
        language = 'en';
      }
      this.localStorageService.setItem('language', language);
    }

    this.translate.use(language);
  }
}
