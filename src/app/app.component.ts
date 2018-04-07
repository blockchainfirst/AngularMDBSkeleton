import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

//type Language = 'en' | 'de' | 'fr' | 'th';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Appname';  
  languages: Array<any> = [{
      name: 'English',
      short: 'en'
    },{
      name: 'Deutsch',
      short: 'de'
    },{
      name: 'Thai',
      short: 'th'
    },{
      name: 'France',
      short: 'fr'
    }
  ]
  language:any;
  translate: TranslateService;
  constructor(translate: TranslateService){
    this.translate = translate;    
    this.languages.forEach((language) => {
       //console.log('language: ', language)       
       translate.addLangs([language.short])
    });    
    translate.setDefaultLang(translate.getLangs()[0]);  
    this.language = this.languages[0];
    //console.log('getLangs: ', translate.getLangs())
  }

  switchLanguage(language) {
    console.log(language);
    this.translate.use(language.short);
    this.language = language;
  }    
  
  public isOpenChange(event): void { console.log('isOpenChange triggered:' , event); }

  public onHidden(event): void { console.log('onHidden triggered!' , event); }

  public onShown(event): void { console.log('OnShown triggered!' , event); }

  public change(event): void { console.log('change triggered: ', event); }
  
}