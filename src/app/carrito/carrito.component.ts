import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ObtenerProductosService } from '../obtener-productos.service';
import {ComprasService}from '../compras.service';
import{CarritoService}from'../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,
    private obtenerProductosService:ObtenerProductosService,
    private compras:ComprasService,
    private carrito:CarritoService) { }


  cabecera: string[] = ['Producto', 'Cantidad', 'Precio Unitario', 'Precio Total', 'Eliminar'];
  productos: any='';
  nProductosEliminar: number = 0;


  ngOnInit(): void {
   
      this.carrito.obtenerCarrito(this.obtenerIdUsuario())
        .subscribe((result: any) => {
          let intermediario: any = result;
          let productosOrdenados = this.ordenarProductos(intermediario);
          this.obtenerProductosService.devolverProductos()
          .subscribe((result)=>{
            let intermediario:any=result;
            let productosJSON = intermediario.productos;
             for (let i =0 ;i<productosOrdenados.length;i++){
              for (let j=0;j<productosJSON.length;j++){
                if (productosJSON[j].nombre==productosOrdenados[i].producto){
                  productosOrdenados[i].precioUnitario=productosJSON[i].precio.split(" ")[0]+" Euros";
                  productosOrdenados[i].precioTotal=productosJSON[i].precio.split(" ")[0] * productosOrdenados[i].cantidad+" Euros";
                }
              }
             }
             this.productos=productosOrdenados;
          });

        });
    
  }

  comprobarSesionIniciada() {

    let sesion = localStorage.getItem("sesion");
    let existe = false;

    if (sesion != null) {
      existe = true;
    }
    return existe;
  }

  obtenerIdUsuario() {
    let sesion: any = window.localStorage.getItem("sesion");
    sesion = JSON.parse(sesion);
    return sesion.id;
  }

  ordenarProductos(carrito: any) {

    let arrayOrdenado = new Array();
    let contador = 0;

    for (let i = 0; i < carrito.length; i++) {
      let producto = carrito[i];
      let posicion = this.isInclude(producto, arrayOrdenado);
      if (posicion > -1) {
        arrayOrdenado[posicion].anandirProducto();
      } else {  
           
        arrayOrdenado[contador++] = new ProductoOrdenado(producto.idUsuario, producto.producto,0,0);
      }
    }

    return arrayOrdenado;
  }

  isInclude(producto: any, arrayOrdenado: any) {

    let posicion = -1;
    for (let i = 0; i < arrayOrdenado.length; i++) {
      if (producto.producto == arrayOrdenado[i].producto) {
        posicion = i;
      }
    }

    return posicion;
  }

  eliminarProducto(producto: string) {
    let numeroEliminaciones: number = 0;
    if (document.getElementById(producto)) {
      let input = <HTMLInputElement>document.getElementById(producto);
      numeroEliminaciones = parseInt(input.value);
    }

    this.carrito.eliminarProducto(this.obtenerIdUsuario(), producto, numeroEliminaciones)
      .subscribe((result) => {

        this.ngOnInit();

      })
  }

  comprarProductos(){
    let idUsuario = this.obtenerIdUsuario();
    this.compras.comprarProducto(idUsuario,this.productos)
    .subscribe((result)=>{
      console.log(result);
      if (result){
        this.snackBar.open("Productos comprados con exito",'',{
          duration: 3000,
        });

        this.carrito.eliminarProductosUsuario(idUsuario)
        .subscribe((result)=>{
          console.log(result);
          this.ngOnInit();
        })
      }else{  
        this.snackBar.open("Ha sucedido un error");
      }
    });
  }

}


class ProductoOrdenado {
  idUsuario: number;
  producto: string;
  precioTotal:number;
  precioUnitario: number;
  cantidad: number;

  constructor(idUsuario: number, producto: string, precio: number, precioTotal:number) {
    this.idUsuario = idUsuario;
    this.producto = producto;
    this.precioUnitario = precio;
    this.cantidad = 1;
    this.precioTotal=precioTotal;
  }

  anandirProducto() {
    this.cantidad++;

  }
}
