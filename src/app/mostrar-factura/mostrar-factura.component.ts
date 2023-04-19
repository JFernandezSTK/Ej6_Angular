import { Component } from '@angular/core';
import { factura } from '../_modelo/factura';
import { CRUDFacturaService } from '../crud-factura.service';

@Component({
  selector: 'app-mostrar-factura',
  templateUrl: './mostrar-factura.component.html',
  styleUrls: ['./mostrar-factura.component.css']
})
export class MostrarFacturaComponent {
  listado:factura[]
  idFactura:number
  idCliente:string
  totalFactura:number
  iva:number
  contador:number

  constructor(private factura:CRUDFacturaService){
    this.listado=[]
    this.idFactura=0
    this.idCliente=""
    this.totalFactura=0
    this.iva=0
    this.contador=0
  }

  anadir(){

    this.factura.anadirFactura(new factura(this.contador,this.idCliente,this.totalFactura,this.iva))
    this.contador++
    
  }

  mostrar(){
    return this.factura.lista
  }

  eliminar(){
    this.factura.eliminarFactura(this.idFactura)
  }

  modificar(){
    this.factura.modificarFactura(this.idFactura,this.idCliente,this.totalFactura,this.iva)
  }
}
