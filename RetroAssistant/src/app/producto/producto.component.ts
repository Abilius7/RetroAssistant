import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ObtenerProductosService } from '../services/obtener-productos.service';
import { CarritoService } from '../services/carrito.service';
import { MatListModule } from '@angular/material/list';
import { SimpleChange } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute,
    private obtenerProductosService: ObtenerProductosService,
    private carrito: CarritoService,
    private snackBar: MatSnackBar,
    private router: Router) { }


  nombreProducto: string = "";
  producto: any = "";
  cantidadProducto: number = 1;
  @Output() cambioTitulo = new EventEmitter();

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) => {

      this.nombreProducto = this.rutaActiva.snapshot.params['nombre'];
      this.obtenerProductosService.devolverProductos()
        .subscribe(result => {

          let articulos: any = result;
          for (let i = 0; i < articulos.productos.length; i++) {
            if (articulos.productos[i].nombre == this.nombreProducto) {
              this.cambioTitulo.emit(this.nombreProducto);
              this.producto = articulos.productos[i];
            }
          }
        });
    });
  }


  annadirCarrito() {
    if (this.comprobarSesionIniciada()) {
      if (this.cantidadProducto > 0 && this.cantidadProducto < 20) {
        let exito = false;
        let producto = this.nombreProducto;
        let localStorageUsuario: any = localStorage.getItem("sesion");
        let idUsuario = this.obtenerIdUsuario();

        this.carrito.annadirProducto(idUsuario, producto, this.cantidadProducto)
          .subscribe(result => {
            let respuesta: any = result;
            if (respuesta.exito || exito == false) {
              exito = true;
              this.snackBar.open('Añadido al carrito con exito', "", {
                panelClass: ['blue-snackbar'],
                duration: 3000,
              });

            }
          });
      }else{
        this.snackBar.open("No puedes annadir al carrito mas de 20 productos a la vez ni menos que 1");
      }

    } else {
      let snackBarRef = this.snackBar.open('Inicia Sesion antes de annadiendo al carrito', "Iniciar sesion");
      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(["/InicioSesion"]);
      });

    }
  }


  obtenerIdUsuario() {
    let sesion: any = window.localStorage.getItem("sesion");
    sesion = JSON.parse(sesion);
    return sesion.id;
  }
  comprobarSesionIniciada() {

    let sesion = localStorage.getItem("sesion");
    let existe = false;

    if (sesion != null) {
      existe = true;
    }
    return existe;
  }
}