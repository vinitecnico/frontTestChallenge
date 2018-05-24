import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { LocalStorageService } from '../../services/local-storage.service';

@Component({
    selector: 'abe-nav-bar',
    templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
    isCollapsed = true;
    public currentLang: string;

    constructor(private translate: TranslateService,
        private localStorageService: LocalStorageService) {
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.currentLang = event.lang;
        });
    }

    changeLanguage(language: string) {
        if (language === this.currentLang) {
            return;
        }

        this.translate.use(language);
        this.localStorageService.setItem('language', language);
    }
}
