import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state_management/reducers';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  mode = 'nigth';
  lang = 'es';
  constructor(private store: Store<State>, private translate: TranslateService) { }

  ngOnInit() {
    this.translation();
    this.suscribeToMode();
  }

  translation() {
    const storeSaved = this.store.select('language').subscribe((lang: string) => {
      this.translate.use(lang);
      this.lang = lang;
    });
  }

  suscribeToMode() {
    this.store.select('mode').subscribe((mode) => {
      this.mode = mode;
    });
  }

}
