import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state_management/reducers';

@Component({
  selector: 'app-button-work',
  templateUrl: './button-work.component.html',
  styleUrls: ['./button-work.component.css']
})
export class ButtonWorkComponent implements OnInit {

  constructor(private translate: TranslateService, private store: Store<State>) { }

  ngOnInit() {
    this.translation();
  }

  translation() {
    const storeSaved = this.store.select('language').subscribe((lang: string) => {
      this.translate.use(lang);
    });
  }
}
