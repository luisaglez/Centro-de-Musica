import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnosListComponent } from './components/alumnos/alumnos-list/alumnos-list.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { DescuentosComponent } from './components/descuentos/descuentos.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    AlumnosListComponent,
    NoticiasComponent,
    DescuentosComponent,
    EventosComponent,
    InicioComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
