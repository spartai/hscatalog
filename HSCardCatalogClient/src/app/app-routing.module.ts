import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooldalComponent } from "./components/fooldal/fooldal.component";
import { KartyaComponent } from "./components/kartya/kartya.component";
import { KartyakComponent } from "./components/kartyak/kartyak.component";
import { PaklikComponent } from "./components/paklik/paklik.component";
import { RegisztracioComponent } from "./components/regisztracio/regisztracio.component";
import { BelepesComponent } from "./components/belepes/belepes.component";

import { from } from 'rxjs';
import { KartyaFormComponent } from './components/kartya-form/kartya-form.component';

import { KartyaEditComponent } from './components/kartya-edit/kartya-edit.component';
import { KartyaCreateComponent } from './components/kartya-create/kartya-create.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/fooldal',
    pathMatch: 'full'
  },
  {
    path: 'kartyak',
    component: KartyakComponent
  },
  {
    path: 'paklik',
    component: PaklikComponent
  },
  {
    path: 'fooldal',
    component: FooldalComponent
  },
  {
    path: 'regisztracio',
    component: RegisztracioComponent
  },
  {
    path: 'kartya/uj',
    component: KartyaCreateComponent
  },
  {
    path: 'kartya/:id/modosit',
    component: KartyaEditComponent
  },
  {
    path: 'kartya/:id',
    component: KartyaComponent
  },
  {
    path: 'belepes',
    component: BelepesComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
