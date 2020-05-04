import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state_management/reducers';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  mode = 'nigth';
  constructor(private store: Store<State>, private translate: TranslateService) { }

  ngOnInit() {
    this.translation();
    this.suscribeToMode();
  }

  suscribeToMode() {
    this.store.select('mode').subscribe((mode) => {
      this.mode = mode;
    });
  }

  translation() {
    const storeSaved = this.store.select('language').subscribe((lang: string) => {
      this.translate.use(lang);
    });
  }


}
