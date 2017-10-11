import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs/Rx';

import { LangConfig } from '../../../config/lang.config';

@Component({
  selector: 'app-lang-switcher',
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.scss']
})
export class LangSwitcherComponent implements OnInit, OnDestroy {
  public currentLang: { code: string, label: string };
  public langs: { code: string, label: string }[] = LangConfig;
  private langChangeSubs: Subscription;
  constructor(private translationService: TranslateService) { }

  public ngOnInit(): void {
    this.langChangeSubs = this.translationService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = this.getCurrentLang(event.lang);
    });
  }

  public ngOnDestroy(): void {
    if (this.langChangeSubs) {
      this.langChangeSubs.unsubscribe();
    }
  }

  public onLangChange(langCode: string): void {
    this.translationService.use(langCode);
  }

  private getCurrentLang(langCode: string): any {
    return this.langs.filter(lang => {
      return lang.code === langCode;
    })[0];
  }

}
