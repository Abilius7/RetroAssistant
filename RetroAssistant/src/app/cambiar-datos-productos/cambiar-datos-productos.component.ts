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
  nombreProductoNuevo:string='';

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

    
    let tabla:any = document.querySelector('.id'+id);
    let visualizarInputs = true;
    if (tabla.querySelector('span').hidden==true){
      visualizarInputs=false;
    }

    let spans: any=tabla.querySelectorAll('span,img');
    for (let i=0;i<spans.length;i++){
      let elemento = spans[i] ;
      elemento.hidden=visualizarInputs;
    }
    let inputs = tabla.querySelectorAll('input,textarea,.inputImg,.botonesEliminar');
    for (let i=0;i<inputs.length;i++){
      let elemento = inputs[i];
      elemento.hidden=!visualizarInputs;
    }
  }

  eliminarObjeto (objeto:string,idProducto:number){

    this.httpProducto.eliminarObjeto(objeto,idProducto)
    .subscribe((result)=>{
      if (result){
        this.ngOnInit();
      }else{
        alert('Ha ocurrido un problema');
      }
    })
  }

  annadirObjeto (idProduto:number){

    this.httpProducto.annadirObjeto(this.nombreProductoNuevo,idProduto)
    .subscribe((result)=>{
      
      if (result){
        this.ngOnInit();
      }else{
        alert('Ha ocurrido un problema');
      }
    });
  }
}
