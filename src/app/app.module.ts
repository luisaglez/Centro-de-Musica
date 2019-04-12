import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnosListComponent } from './components/alumnos/alumnos-list/alumnos-list.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { DescuentosComponent } from './components/descuentos/descuentos.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { InicioComponent } from './components/inicio/inicio.component';

import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import{environment} from '../environments/environment';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosListComponent } from './components/productos/productos-list/productos-list.component';
import { ProductoComponent } from './components/productos/producto/producto.component';

import{ProductoService} from './services/producto.service';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    AlumnosListComponent,
    NoticiasComponent,
    DescuentosComponent,
    EventosComponent,
    InicioComponent,
    ProductosComponent,
    ProductosListComponent,
    ProductoComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule

  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
