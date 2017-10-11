import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangConfig } from './config/lang.config';
import { AppConfig } from './config/main.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {

    translate.addLangs(LangConfig.map(lang => { return lang.code }));
    translate.setDefaultLang(AppConfig.defaultLang);

    let browserLang: string = translate.getBrowserLang();
    // TODO: make match dynamic
    translate.use(browserLang.match(/en|fr/) ? browserLang : AppConfig.defaultLang);
  }
}
