// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { UbicanosComponent } from './pages/ubicanos/ubicanos.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { CotizarComponent } from './pages/cotizar/cotizar.component';
import { LadrillosParaMuroComponent } from './productos/ladrillos-para-muro/ladrillos-para-muro.component'; // Importa el componente LadrillosParaMuroComponent
import { LadrillosParaTechoComponent } from './productos/ladrillos-para-techo/ladrillos-para-techo.component'; // Importa el componente LadrillosParaTechoComponent
import { KingKongComponent } from './productos/ladrillos-para-muro/king-kong/king-kong.component';
import { PanderetaComponent } from './productos/ladrillos-para-muro/pandereta/pandereta.component';
import { Techo10Component } from './productos/ladrillos-para-techo/techo10/techo10.component';
import { Techo12Component } from './productos/ladrillos-para-techo/techo12/techo12.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/ladrillos-para-muro', component: LadrillosParaMuroComponent },
  { path: 'productos/ladrillos-para-muro/king-kong', component: KingKongComponent },
  { path: 'productos/ladrillos-para-muro/pandereta', component: PanderetaComponent },
  { path: 'productos/ladrillos-para-techo', component: LadrillosParaTechoComponent },
  { path: 'productos/ladrillos-para-techo/techo10', component: Techo10Component },
  { path: 'productos/ladrillos-para-techo/techo12', component: Techo12Component },
  { path: 'ubicanos', component: UbicanosComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'cotizar', component: CotizarComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
