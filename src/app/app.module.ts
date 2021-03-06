import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';
// libreria para traducir
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

// store Redux
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer, DefaultRouterStateSerializer } from '@ngrx/router-store';
import { reducers, metaReducers } from './state_management/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// vistas
import { WelcomeComponent } from './vistas/welcome/welcome.component';
import { PortafolioComponent } from './vistas/portafolio/portafolio.component';
import { ServiceComponent } from './vistas/service/service.component';
import { ReferencesComponent } from './vistas/references/references.component';
import { AboutmeComponent } from './vistas/aboutme/aboutme.component';
import { ContactComponent } from './vistas/contact/contact.component';
import { BlogComponent } from './vistas/blog/blog.component';

// elementos transversales a todo el sitio
import { TopMenuComponent } from './vistas/top-menu/top-menu.component';
import { FooterComponent } from './vistas/footer/footer.component';

// componentes aislados
import { ButtonWorkComponent } from './vistas/welcome/button-work/button-work.component';
import { ResponsiveMenuComponent } from './vistas/top-menu/responsive-menu/responsive-menu.component';
import { MsgButtonComponent } from './componentes/msg-button/msg-button.component';
import { ContactFormComponent } from './componentes/msg-button/contact-form/contact-form.component';

// modelos
import { ContactFormInterface } from './models/contactFormInterface';


// modulos y servicios
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import { MesageService } from './servicios/mesage.service';
import { MesageFormContactViewComponent } from './vistas/contact/mesage-form-contact-view/mesage-form-contact-view.component';




// librerias


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PortafolioComponent,
    ServiceComponent,
    ReferencesComponent,
    AboutmeComponent,
    ContactComponent,
    MsgButtonComponent,
    FooterComponent,
    TopMenuComponent,
    ButtonWorkComponent,
    ResponsiveMenuComponent,
    ContactFormComponent,
    MesageFormContactViewComponent,
    BlogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ serializer: DefaultRouterStateSerializer, stateKey: 'router' }),
    StoreDevtoolsModule.instrument({
     maxAge: 25 // Retains last 25 states
    }),
  ],
  providers: [ AngularFirestore, MesageService, {provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
