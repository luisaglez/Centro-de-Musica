import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{InicioComponent} from'./components/inicio/inicio.component';
import{NoticiasComponent} from'./components/noticias/noticias.component';
import {DescuentosComponent } from './components/descuentos/descuentos.component';
import{EventosComponent} from'./components/eventos/eventos.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'noticias', component: NoticiasComponent},
  {path:'descuentos',component:DescuentosComponent},
  {path:'eventos', component:EventosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
