import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { ComprasService } from 'src/app/services/compras.service';
@Component({
  selector: 'app-opciones-usuario',
  templateUrl: './opciones-usuario.component.html',
  styleUrls: ['./opciones-usuario.component.css']
})
export class OpcionesUsuarioComponent implements OnInit {

  constructor(private router: Router,private _bottomSheetRef: MatBottomSheetRef<OpcionesUsuarioComponent>,private compras:ComprasService) { }

  tipoProducto :any ='' ;
  nombreUsuario:string='';

  ngOnInit(): void {
    let sesion:any = localStorage.getItem("sesion");
    sesion=JSON.parse(sesion);
    this.nombreUsuario=sesion.usuario;
    this.compras.obtenerProductos(sesion.id)
    .subscribe((result)=>{
      let intermediario:any = result;
      this.tipoProducto=intermediario;
    });
  }

  cerrarSesion() {
    localStorage.removeItem('sesion');
    this.router.navigate(['/InicioSesion']);
  }

  cerrar(){
    this._bottomSheetRef.dismiss();
  }
}
