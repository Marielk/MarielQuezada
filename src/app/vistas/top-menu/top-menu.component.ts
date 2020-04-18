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
export class TopMenuComponent implements OnInit, AfterViewChecked {
  mode = 'noche';
  modeColor = '';
  constructor( private translate: TranslateService, private store: Store<State> ) { }

  ngOnInit() {
    this.translateDefault();
    this.suscribeToMode();
  }

  ngAfterViewChecked() {
    this.activeSwitch();
  }

  translateDefault() {
    const isSavedLang = this.checkCookieLang();
    if (isSavedLang === true) {
      const lang = Cookie.get('lang');
      this.translate.use(lang);
    } else {
      const action = new Changelanguage('es');
      this.store.dispatch(action);
      this.translate.use('es');
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
      } else {
        Cookie.set('lang', 'en');
        const action = new Changelanguage('en');
        this.store.dispatch(action);
        this.translate.use('en');
      }
    } else {
      Cookie.set('lang', 'en');
      const action = new Changelanguage('en');
      this.store.dispatch(action);
      this.translate.use('en');
    }
  }

  activeSwitch() {
    // debugger
    const switchInput = document.getElementById('switch') as HTMLInputElement;
    switchInput.addEventListener('click', () => {
      const checked = switchInput.checked;
      if (checked === true) {
        const action = new ChangeMode('day');
        this.store.dispatch(action);
        Cookie.set('mode', 'day');
        this.mode = 'día';
      } else {
        const action = new ChangeMode('nigth');
        Cookie.set('mode', 'nigth');
        this.store.dispatch(action);
        this.mode = 'noche';
      }
    });
  }

  suscribeToMode() {
    this.store.select('mode').subscribe((mode) => {
      this.modeColor = mode;
      if (mode === 'day') {
        this.mode = 'día';
        const action = new ChangeMode('day');
        this.store.dispatch(action);
        const switchInput = document.getElementById('switch') as HTMLInputElement;
        switchInput.checked = true;
      }
    });
  }
}
