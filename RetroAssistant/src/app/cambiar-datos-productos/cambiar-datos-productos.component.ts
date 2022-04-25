import { Component, OnInit } from '@angular/core';
import { ObtenerProductosService } from '../services/obtener-productos.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-cambiar-datos-productos',
  templateUrl: './cambiar-datos-productos.component.html',
  styleUrls: ['./cambiar-datos-productos.component.css']
})
export class CambiarDatosProductosComponent implements OnInit {

  constructor(private productos:ObtenerProductosService,private httpProducto:ProductosService ) { }

  arrayProductos:any='';

  ngOnInit(): void {
    this.productos.devolverProductos().subscribe((response)=>{
      console.log(response);
      let intermediario:any = response
      this.arrayProductos=intermediario.productos;
    })
  }

  eliminar (id:string){
    this.httpProducto.eliminarProducto(id)
    .subscribe((response)=>{
      this.ngOnInit();
    })
  }
  cambiar (id:string){
    let tabla:any = document.querySelector('.tablaProducto');
    let spans: any=tabla.querySelectorAll('span');
    for (let i=0;i<spans.length;i++){
      let elemento = spans[i].innerHTML =spans[i].hidden=true;
    }
    let inputs = tabla.querySelectorAll('input,textarea');
    for (let i=0;i<inputs.length;i++){
      let elemento = inputs[i].innerHTML =inputs[i].hidden=false;
    }
  }

}
