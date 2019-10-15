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
  // formEntrie: any = ;
  // formEntrieDeep: any = Object.entries(this.formEntrie);
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

  // turnOn() {
  //   const input = this.form[0][0];
  //   const inputArray = [this.form[0][1], this.form[0][2], this.form[0][3], this.form[0][4], this.form[0][5], this.form[0][6]];
  //   const aElement = document.getElementsByTagName('a');
  //   const aElemArray = [aElement[1], aElement[2], aElement[3], aElement[4], aElement[5], aElement[6] ];
  //   // console.log(inputArray);
  //   // console.log(aElemArray);

  //   if (input.checked === true) {
  //     // console.log('true');
  //     inputArray.forEach(checkbox => {
  //       checkbox.disabled = false;
  //       checkbox.style.display = 'inline-block';
  //     });
  //     aElemArray.forEach( a => {
  //       a.style.display = 'inline-block';
  //     });
  //   } else {
  //     // console.log('false');
  //     inputArray.forEach(checkbox => {
  //       checkbox.disabled = true;
  //     });
  //     // console.log(inputArray[0].disabled);
  //     // console.log(input.checked);
  //   }
  // }

  enableButtons() {
    const input = this.form[0][0];
    const btn1 = (document.getElementById('btn1')as HTMLButtonElement);
    const btn2 = (document.getElementById('btn2')as HTMLButtonElement);
    const btn3 = (document.getElementById('btn3')as HTMLButtonElement);
    const btn4 = (document.getElementById('btn4')as HTMLButtonElement);
    const btn5 = (document.getElementById('btn5')as HTMLButtonElement);
    const btn6 = (document.getElementById('btn6')as HTMLButtonElement);
    const btn7 = (document.getElementById('btn7')as HTMLButtonElement);
    const btns = [btn1, btn2, btn3, btn4, btn5, btn6, btn7];
     // console.log(btns);
    if (input.checked === true) {
      btns.forEach(buton => {
        buton.disabled = false;
        // console.log('false');
      });
    }
  }

  validate() {
    // const body = document.getElementsByTagName('body')[0];
    // body.style.display = 'inline';
    const input = this.form[0][0];
    if (input.checked === true) {
      input.checked = false;
    }
     // console.log(this.input.checked);
  }

  // back() {
  //   // const body = document.getElementsByTagName('body')[0];
  //   // body.style.display = '-webkit-box';
  //   // console.log(body.style.display);
  //   const input = this.form[0][0];
  //   if (input.checked === true) {
  //     input.checked = false;
  //   }
  // // on() {
  // //   this.input.value = 'on';
  // // }
  // // return() {
  // //   this.input.nodeValue = 'off';
  // // }
  // }
}
