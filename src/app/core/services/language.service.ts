import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

   currentLang = signal<'en' | 'ar'>('ar');


  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLang());
  }

  toggleLanguage() {
    this.currentLang.set( this.currentLang() === 'en' ? 'ar' : 'en');
    this.translate.use(this.currentLang());
    document.documentElement.dir = this.currentLang() === 'ar' ? 'rtl' : 'ltr';
  }
}
