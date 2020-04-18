import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state_management/reducers';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  mode = 'nigth';
  constructor(private translate: TranslateService, private store: Store<State>) { }

  ngOnInit() {
    this.translation();
    this.suscribeToMode();
  }

  translation() {
    const storeSaved = this.store.select('language').subscribe((lang: string) => {
      this.translate.use(lang);
    });
  }

  suscribeToMode() {
    this.store.select('mode').subscribe((mode) => {
      this.mode = mode;
    });
  }
}
