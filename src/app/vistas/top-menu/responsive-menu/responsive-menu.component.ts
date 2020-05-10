import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as Cookie from 'js-cookie';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state_management/reducers';
import { Changelanguage } from 'src/app/state_management/reducers/language.actions';
import { ChangeMode } from 'src/app/state_management/reducers/mode.actions';

@Component({
  selector: 'app-responsive-menu',
  templateUrl: './responsive-menu.component.html',
  styleUrls: ['./responsive-menu.component.css'],
})
export class ResponsiveMenuComponent implements OnInit, AfterViewChecked {
  form: any = document.getElementsByName('form');
  input: any;
  buton: HTMLButtonElement;
  mode = 'Noche';
  lang = '';
  modeColor = '';
  constructor( private translate: TranslateService, private store: Store<State>  ) {
  }

  ngOnInit() {
    this.translateDefault();
    this.colorDefault();
    this.translateMode();
    this.suscribeToMode();
  }

  ngAfterViewChecked() {
    this.activeSwitch();
  }


  activeSwitch() {
    // debugger
    const switchInput = document.getElementById('switchMovile') as HTMLInputElement;
    switchInput.addEventListener('click', () => {
      const checked = switchInput.checked;
      if (checked === true) {
        const action = new ChangeMode('day');
        this.store.dispatch(action);
        Cookie.set('mode', 'day');
        // this.mode = 'día';
        this.translateMode();
      } else {
        const action = new ChangeMode('nigth');
        Cookie.set('mode', 'nigth');
        this.store.dispatch(action);
        // this.mode = 'noche';
        this.translateMode();
      }
    });
  }

  translateMode() {
    const mode = Cookie.get('mode');
    const lang = Cookie.get('lang');
    if (mode === 'day' && lang === 'es') {
      this.mode = 'Día';
    } else if (mode === 'nigth' && lang === 'es') {
      this.mode = 'Noche';
    } else if (mode === 'day' && lang === 'en') {
      this.mode = 'Day';
    } else if (mode === 'nigth' && lang === 'en') {
      this.mode = 'Nigth';
    }
    // console.log(mode, lang, this.mode);
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
      this.lang = 'es';
    }
  }

  colorDefault() {
    const action = new ChangeMode('nigth');
    Cookie.set('mode', 'nigth');
    this.store.dispatch(action);
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
    this.translateMode();
  }


  enableButtons() {
    const input = this.form[0][0];
    const btns = document.getElementsByClassName('btnMenu');
     // console.log(btns);
    if (input.checked === true) {
      Array.from(btns).forEach((button: HTMLButtonElement) => {
        button.disabled = false;
      });
    }
  }

  validate() {
    const input = this.form[0][0];
    if (input.checked === true) {
      input.checked = false;
    }
     // console.log(this.input.checked);
  }

  suscribeToMode() {
    this.store.select('mode').subscribe((mode) => {
      // this.mode = mode;
      this.modeColor = mode;
    });
  }
  
}
