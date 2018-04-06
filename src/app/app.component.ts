import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

type Language = 'en' | 'de' | 'fr' | 'th';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  translate: TranslateService;
  constructor(translate: TranslateService){
    this.translate = translate;    
    translate.addLangs(['en', 'de', 'fr', 'th']);
    translate.setDefaultLang('en');  
  }

  switchLanguage = (lang: Language) => {
    this.translate.use(lang);
  }
}