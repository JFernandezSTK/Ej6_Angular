import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MostrarFacturaComponent } from './mostrar-factura/mostrar-factura.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactarComponent } from './contactar/contactar.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarFacturaComponent,
    InicioComponent,
    QuienesSomosComponent,
    ContactarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
