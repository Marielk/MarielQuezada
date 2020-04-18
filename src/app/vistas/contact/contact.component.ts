import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state_management/reducers';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  mode = 'nigth';
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.suscribeToMode();
  }

  suscribeToMode() {
    this.store.select('mode').subscribe((mode) => {
      this.mode = mode;
    });
  }

}
