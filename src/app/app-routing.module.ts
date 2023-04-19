import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactarComponent } from './contactar/contactar.component';
import { MostrarFacturaComponent } from './mostrar-factura/mostrar-factura.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'quienes_somos', component: QuienesSomosComponent },
  { path: 'contactar', component: ContactarComponent },
  { path: 'mostrar_factura', component: MostrarFacturaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
