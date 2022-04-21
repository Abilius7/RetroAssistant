import { Component, OnInit } from '@angular/core';
import { ObtenerProductosService } from '../services/obtener-productos.service';

@Component({
  selector: 'app-cambiar-datos-productos',
  templateUrl: './cambiar-datos-productos.component.html',
  styleUrls: ['./cambiar-datos-productos.component.css']
})
export class CambiarDatosProductosComponent implements OnInit {

  constructor(private productos:ObtenerProductosService ) { }

  arrayProductos:any='';

  ngOnInit(): void {
    this.productos.devolverProductos().subscribe((response)=>{
      console.log(response);
      let intermediario:any = response
      this.arrayProductos=intermediario.productos;
    })
  }

}
