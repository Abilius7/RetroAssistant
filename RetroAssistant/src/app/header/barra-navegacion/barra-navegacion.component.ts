import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ObtenerProductosService } from '../../services/obtener-productos.service';
import { MatSelectModule } from '@angular/material/select';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { OpcionesUsuarioComponent } from './opciones-usuario/opciones-usuario.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  productos: any;
  @Output() eventoCambioTitulo = new EventEmitter();
  constructor(private obtenerProductosService: ObtenerProductosService,
     private _bottomSheet: MatBottomSheet,
     private router:Router,
     private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.obtenerProductosService.devolverProductos()
      .subscribe(result => {

        let articulos: any = result;
        this.productos = articulos.productos;

      });
  }

  abrirOpcionesUsuario() {

    if (this.comprobarSesionIniciada()) {
      this._bottomSheet.open(OpcionesUsuarioComponent);
    }else{
      this.router.navigate(["/InicioSesion"]);
    }
  }

  comprobarSesionIniciada() {

    let sesion = localStorage.getItem("sesion");
    let existe = false;

    if (sesion != null) {
      existe = true;
    }
    return existe;
  }

  irCarrito(){
    if (this.comprobarSesionIniciada()){
      this.router.navigate(["/Carrito"]);
    }else{
      let snak = this.snack.open("Porfavor inicia sesion antes de acceder al carrito","Ir a iniciar sesion");
      snak.onAction().subscribe(()=>{
        this.router.navigate(["/InicioSesion"]);
      });
    }
    
  }
}
