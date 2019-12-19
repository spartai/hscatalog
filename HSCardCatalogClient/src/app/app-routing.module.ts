import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooldalComponent } from "./components/fooldal/fooldal.component";
import { KartyaComponent } from "./components/kartya/kartya.component";
import { KartyakComponent } from "./components/kartyak/kartyak.component";
import { PaklikComponent } from "./components/paklik/paklik.component";
import { RegisztracioComponent } from "./components/regisztracio/regisztracio.component";
import { BelepesComponent } from "./components/belepes/belepes.component";
import { FiokComponent } from "./components/fiok/fiok.component";
import { from } from 'rxjs';





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
    path: 'kartya/:id',
    component: KartyaComponent
  },
  {
    path: 'belepes',
    component: BelepesComponent
  },
  {
    path: 'fiok',
    component: FiokComponent
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
