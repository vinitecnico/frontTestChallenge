import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';

import { LocalStorageService } from '../../services/local-storage.service';


@Component({
    selector: 'abe-nav-bar',
    templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
    activeUrl: string;
    isCollapsed = true;
    public currentLang: string;

    constructor(private translate: TranslateService,
        private localStorageService: LocalStorageService,
        private router: Router) {
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.currentLang = event.lang;
        });

        router.events.subscribe((val: NavigationEnd) => {
            this.activeUrl = val.url;
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
