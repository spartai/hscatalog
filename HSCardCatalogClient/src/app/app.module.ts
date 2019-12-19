import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooldalComponent } from './components/fooldal/fooldal.component';
import { KartyakComponent } from './components/kartyak/kartyak.component';
import { PaklikComponent } from './components/paklik/paklik.component';
import { RegisztracioComponent } from './components/regisztracio/regisztracio.component';
import { BelepesComponent } from './components/belepes/belepes.component';
import { FiokComponent } from './components/fiok/fiok.component';
import { KartyaComponent } from './components/kartya/kartya.component';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    KartyakComponent,
    PaklikComponent,
    RegisztracioComponent,
    BelepesComponent,
    FiokComponent,
    KartyaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
