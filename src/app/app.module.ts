import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { UbicanosComponent } from './pages/ubicanos/ubicanos.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { CotizarComponent } from './pages/cotizar/cotizar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Agrega esta línea
import { HttpClientModule } from '@angular/common/http';
import { LadrillosParaMuroComponent } from './productos/ladrillos-para-muro/ladrillos-para-muro.component';
import { LadrillosParaTechoComponent } from './productos/ladrillos-para-techo/ladrillos-para-techo.component';
import { KingKongComponent } from './productos/ladrillos-para-muro/king-kong/king-kong.component';
import { PanderetaComponent } from './productos/ladrillos-para-muro/pandereta/pandereta.component';
import { Techo10Component } from './productos/ladrillos-para-techo/techo10/techo10.component';
import { Techo12Component } from './productos/ladrillos-para-techo/techo12/techo12.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PedidoDetalleComponent } from './pedido-detalle/pedido-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    ProductosComponent,
    UbicanosComponent,
    ContactanosComponent,
    CotizarComponent,
    LadrillosParaMuroComponent,
    LadrillosParaTechoComponent,
    KingKongComponent,
    PanderetaComponent,
    Techo10Component,
    Techo12Component,
    NotFoundComponent,
    PedidoDetalleComponent,
    PedidoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
