import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ObtenerProductosService } from '../../services/obtener-productos.service';
import { ComprasService } from '../../services/compras.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,
    private obtenerProductosService: ObtenerProductosService,
    private compras: ComprasService,
    private carrito: CarritoService) { }


  cabecera: string[] = ['Producto', 'Cantidad', 'Precio Unitario', 'Precio Total', 'Eliminar'];
  productos: any = [];
  precioTotal: any = 0;


  ngOnInit(): void {

    this.carrito.obtenerCarrito(this.obtenerIdUsuario())
      .subscribe((result: any) => {
        let carrito: any = result;
        this.obtenerProductosService.devolverProductos()
          .subscribe((result) => {
            this.productos = [];
            let productos: any = result;

            for (let i = 0; i < carrito.length; i++) {
              for (let j = 0; j < productos.productos.length; j++) {
                if (carrito[i].producto == productos.productos[j].nombre) {
                  let producto = new Producto(carrito[i].producto, productos.productos[j].precio, carrito[i].cantidad);
                  this.productos[this.productos.length] = producto;
                }
              }
            }

            this.obtenerPrecioTotal();

          });

      });


  }

  obtenerIdUsuario() {
    let sesion: any = window.localStorage.getItem("sesion");
    sesion = JSON.parse(sesion);
    return sesion.id;
  }


  eliminarProducto(producto: string,cantidadProducto:number) {
    let numeroEliminaciones: number = 0;
    if (document.getElementById(producto)) {
      let input = <HTMLInputElement>document.getElementById(producto);
      numeroEliminaciones = parseInt(input.value);
      if (numeroEliminaciones<=cantidadProducto&&numeroEliminaciones>0) {
        this.carrito.eliminarProducto(this.obtenerIdUsuario(), producto, numeroEliminaciones)
          .subscribe((result) => {

            this.ngOnInit();

          })
      }else{
        this.snackBar.open("La cantidad de producto a eliminar no puede ser ni mayor que la cantidad disponible ni menor que 0");
      }
    }


  }

  comprarProductos() {
    let idUsuario = this.obtenerIdUsuario();
    this.compras.comprarProducto(idUsuario, this.productos)
      .subscribe((result) => {
        console.log(result);
        if (result) {
          this.snackBar.open("Productos comprados con exito", '', {
            duration: 3000,
          });

          this.carrito.eliminarProductosUsuario(idUsuario)
            .subscribe((result) => {
              console.log(result);
              this.ngOnInit();
            })
        } else {
          this.snackBar.open("Ha sucedido un error");
        }
      });
  }

  obtenerPrecioTotal() {
    let sumatorio = 0;
    this.productos.forEach((element: any) => {
      sumatorio = sumatorio + (element.precioUnitario * element.cantidad);
    });

    this.precioTotal = sumatorio;
  }

}


class Producto {
  producto: string;
  precioUnitario: number;
  cantidad: number;

  constructor(producto: string, precio: number, cantidad: number) {
    this.producto = producto;
    this.precioUnitario = precio;
    this.cantidad = cantidad;
  }

  anandirProducto() {
    this.cantidad++;

  }
}
