import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { WelcomeComponent } from './vistas/welcome/welcome.component';
import { PortafolioComponent } from './vistas/portafolio/portafolio.component';
import { ServiceComponent } from './vistas/service/service.component';
import { ReferencesComponent } from './vistas/references/references.component';
import { AboutmeComponent } from './vistas/aboutme/aboutme.component';
import { ContactComponent } from './vistas/contact/contact.component';



const app_routes: Routes=[
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'welcome/portafolio', component: PortafolioComponent
  },
  {
    path: 'welcome/service', component: ServiceComponent
  },
  {
    path: 'welcome/references', component: ReferencesComponent
  },
  {
    path: 'welcome/aboutme', component: AboutmeComponent
  },
  {
    path: 'welcome/contact', component: ContactComponent
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