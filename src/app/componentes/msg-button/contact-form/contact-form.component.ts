import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MesageService } from '../../../servicios/mesage.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { ContactFormInterface } from '../../../models/contactFormInterface';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state_management/reducers';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  mesage: ContactFormInterface = {
    name: '',
    company: '',
    contact: '',
    mesage: '',
  };

  contactForm = this.fb.group({
    name: ['', Validators.required],
    company: ['', Validators.required],
    contact: ['', Validators.required],
    mesage: ['', Validators.required]
  });
  mode = 'nigth';
  constructor(private fb: FormBuilder, private sendMesageService: MesageService, 
    private storage: AngularFireStorage, private store: Store<State> ) { }

  ngOnInit() {
    this.suscribeToMode();
  }

  suscribeToMode() {
    this.store.select('mode').subscribe((mode) => {
      this.mode = mode;
    });
  }

  onSubmit() {

    // console.log(this.contactForm.value.name);
    this.mesage.name = this.contactForm.value.name ;
    this.mesage.company = this.contactForm.value.company;
    this.mesage.contact = this.contactForm.value.contact;
    this.mesage.mesage = this.contactForm.value.mesage;
    this.sendMesageService.sendMesage(this.mesage);
    alert('Gracias por contactarme, te respondere a la brevedad!');
  }

}
