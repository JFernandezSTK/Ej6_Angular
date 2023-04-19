import { Injectable } from '@angular/core';
import { factura } from './_modelo/factura';

@Injectable({
  providedIn: 'root'
})
export class CRUDFacturaService {
  lista:factura[]
  idFactura:number
  idCliente:string
  totalFactura:number
  iva:number
  cont:number

  constructor() { 
    this.lista=[]
    this.idFactura=0
    this.idCliente=""
    this.totalFactura=0
    this.iva=0
    this.cont=0
  }

  anadirFactura(f:factura){
    this.lista.push(f)
  }


  eliminarFactura(idFactura:number){
    this.lista = this.lista.filter(f => f.idFactura !== idFactura)
  }

  modificarFactura(idFactura:number,idCliente:string,totalFactura:number,iva:number){
    let f =this.lista.find(f => f.idFactura == idFactura)
    if(f != undefined) {
      let index = this.lista.indexOf(f)
      f.idCliente = idCliente
      f.totalFactura = totalFactura
      f.iva = iva
      this.lista[index] = f
    }

  }
}
