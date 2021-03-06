import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as Cookie from 'js-cookie';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state_management/reducers';
import { Changelanguage } from 'src/app/state_management/reducers/language.actions';
import { ChangeMode } from 'src/app/state_management/reducers/mode.actions';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit{
  mode = 'Noche';
  modeColor = '';
  lang = '';
  constructor( private translate: TranslateService, private store: Store<State> ) { }

  ngOnInit() {
    this.translateDefault();
    this.colorDefault();
    this.translateMode();
    this.suscribeToMode();
  }

  translateDefault() {
    const isSavedLang = this.checkCookieLang();
    if (isSavedLang === true) {
      const lang = Cookie.get('lang');
      this.translate.use(lang);
      this.lang = lang;
    } else {
      const action = new Changelanguage('es');
      this.store.dispatch(action);
      this.translate.use('es');
      this.lang = 'es';
    }
  }

  checkCookieLang() {
    const savedLang = Cookie.get('lang');
    if (savedLang !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  changeLanguage() {
    const isSavedLang = this.checkCookieLang();
    if (isSavedLang === true) {
      const lang = Cookie.get('lang');
      if (lang === 'en') {
        Cookie.set('lang', 'es');
        const action = new Changelanguage('es');
        this.store.dispatch(action);
        this.translate.use('es');
        this.lang = 'es';
      } else {
        Cookie.set('lang', 'en');
        const action = new Changelanguage('en');
        this.store.dispatch(action);
        this.translate.use('en');
        this.lang = 'en';
      }
    } else {
      Cookie.set('lang', 'en');
      const action = new Changelanguage('en');
      this.store.dispatch(action);
      this.translate.use('en');
      this.lang = 'en';
    }
    this.translateMode()
  }

  colorDefault() {
    const action = new ChangeMode('nigth');
    Cookie.set('mode', 'nigth');
    this.store.dispatch(action);
  }

  switchColor(e) {
    const checked = e.toElement.checked;
      if (checked === true) {
        const action = new ChangeMode('day');
        this.store.dispatch(action);
        Cookie.set('mode', 'day');
      } else {
        const action = new ChangeMode('nigth');
        Cookie.set('mode', 'nigth');
        this.store.dispatch(action);
      }
      this.translateMode();
  }

  translateMode() {
    const mode = Cookie.get('mode');
    const lang = Cookie.get('lang');
    if(lang) {
      if (mode === 'day' && lang === 'es') {
        this.mode = 'Día';
      } else if (mode === 'nigth' && lang === 'es') {
        this.mode = 'Noche';
      } else if (mode === 'day' && lang === 'en') {
        this.mode = 'Day';
      } else if (mode === 'nigth' && lang === 'en') {
        this.mode = 'Nigth';
      }
    } else {
      if (mode === 'day') {
        this.mode = 'Día';
      } else {
        this.mode = 'Noche';
      }
    }

    console.log(mode, lang, this.mode);
  }

  suscribeToMode() {
    this.store.select('mode').subscribe((mode) => {
      this.modeColor = mode;
    });
  }
}
