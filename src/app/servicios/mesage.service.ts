import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactFormInterface } from '../models/contactFormInterface';


@Injectable({
  providedIn: 'root'
})
export class MesageService {
  mesageCollection: AngularFirestoreCollection<ContactFormInterface>;
  mesages: Observable<ContactFormInterface[]>;
  mesageDoc: AngularFirestoreDocument<ContactFormInterface>;
  counter: number;

  constructor(public afs: AngularFirestore) {
    // guardar coleccion
    this.mesageCollection = afs.collection<ContactFormInterface>('mesages');
    this.mesages = this.mesageCollection.snapshotChanges().pipe(

      map(post => post.map(texto => {
        const datos = texto.payload.doc.data() as ContactFormInterface;
        const id = texto.payload.doc.id;
        return { id, ...datos };
      }
      ))
    );

  }

  sendMesage(mesage: ContactFormInterface) {
    console.log('mensaje enviado');
    this.mesageCollection.add(mesage);
  }

  }

