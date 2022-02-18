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

  constructor() { }

  ngOnInit(): void {
    this.productos=this.pedido.desglose
  }

}
