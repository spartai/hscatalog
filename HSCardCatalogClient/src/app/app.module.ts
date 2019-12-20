import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooldalComponent } from './components/fooldal/fooldal.component';
import { KartyakComponent } from './components/kartyak/kartyak.component';
import { PaklikComponent } from './components/paklik/paklik.component';
import { RegisztracioComponent } from './components/regisztracio/regisztracio.component';
import { BelepesComponent } from './components/belepes/belepes.component';
import { KartyaComponent } from './components/kartya/kartya.component';
import { KartyaFormComponent } from './components/kartya-form/kartya-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, 
  MatButtonModule, 
  MatIconModule,
  MatListModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { KartyaEditComponent } from './components/kartya-edit/kartya-edit.component';
import { KartyaCreateComponent } from './components/kartya-create/kartya-create.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    KartyakComponent,
    PaklikComponent,
    RegisztracioComponent,
    BelepesComponent,
    KartyaComponent,
    KartyaFormComponent,
    KartyaEditComponent,
    KartyaCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatListModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
