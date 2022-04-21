import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {


  cabecera:string[]=["Producto","Cantidad","Precio"];
  @Input() pedido:any="";
  productos:any;
  precioTotal:number=0;
  constructor() { }

  ngOnInit(): void {
    this.productos=this.pedido.desglose
    this.obtenerPrecioTotal ();
  }

  obtenerPrecioTotal (){
    let sumatorio =0;
    this.productos.forEach((element:any) => {
        sumatorio =sumatorio+ element.precio*element.cantidad;
    });

    this.precioTotal = sumatorio;
  }

}
