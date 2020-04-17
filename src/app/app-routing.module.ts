import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { WelcomeComponent } from './vistas/welcome/welcome.component';
import { PortafolioComponent } from './vistas/portafolio/portafolio.component';
import { ServiceComponent } from './vistas/service/service.component';
import { BlogComponent } from './vistas/blog/blog.component';
import { AboutmeComponent } from './vistas/aboutme/aboutme.component';
import { ContactComponent } from './vistas/contact/contact.component';
import { PianoKeyboardComponent } from './componentes/piano-keyboard/piano-keyboard.component';
// children: [
//   {path: 'pianokey', component: PianoKeyboardComponent}
// ]

const app_routes: Routes = [
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'portafolio', component: PortafolioComponent
  },
  {
    path: 'service', component: ServiceComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'aboutme', component: AboutmeComponent
  },
  {
    path: 'contact', component: ContactComponent
  },

  {
    path: '**', pathMatch: 'full', redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
