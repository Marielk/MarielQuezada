import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// vistas 
import { WelcomeComponent } from './vistas/welcome/welcome.component';
import { PortafolioComponent } from './vistas/portafolio/portafolio.component';
import { ServiceComponent } from './vistas/service/service.component';
import { ReferencesComponent } from './vistas/references/references.component';
import { AboutmeComponent } from './vistas/aboutme/aboutme.component';
import { ContactComponent } from './vistas/contact/contact.component';

// elementos transversales a todo el sitio 
import { TopMenuComponent } from './vistas/top-menu/top-menu.component';
import { FooterComponent } from './vistas/footer/footer.component';

//modulos y servicios
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';

// elementos de la seccion welcome 
import { ButtonProfileComponent } from './vistas/welcome/button-profile/button-profile.component';
import { MsgButtonComponent } from './vistas/welcome/msg-button/msg-button.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PortafolioComponent,
    ServiceComponent,
    ReferencesComponent,
    AboutmeComponent,
    ContactComponent,
    ButtonProfileComponent,
    MsgButtonComponent,
    FooterComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
