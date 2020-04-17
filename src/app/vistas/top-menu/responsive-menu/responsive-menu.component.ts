import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as Cookie from 'js-cookie';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state_management/reducers';
import { Changelanguage } from 'src/app/state_management/reducers/language.actions';

@Component({
  selector: 'app-responsive-menu',
  templateUrl: './responsive-menu.component.html',
  styleUrls: ['./responsive-menu.component.css'],
})
export class ResponsiveMenuComponent implements OnInit {
  form: any = document.getElementsByName('form');
  input: any;
  buton: HTMLButtonElement;
  constructor( private translate: TranslateService, private store: Store<State>  ) {
  }

  ngOnInit() {
    this.translateDefault();
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

  
}
