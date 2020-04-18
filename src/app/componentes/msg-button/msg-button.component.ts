import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state_management/reducers';

@Component({
  selector: 'app-msg-button',
  templateUrl: './msg-button.component.html',
  styleUrls: ['./msg-button.component.css']
})
export class MsgButtonComponent implements OnInit {
  mode = 'nigth';
  constructor(private store: Store<State>) {

  }

  ngOnInit() {
    this.suscribeToMode();
  }

  suscribeToMode() {
    // debugger
    this.store.select('mode').subscribe((mode) => {
      this.mode = mode;
    });
  }

}
