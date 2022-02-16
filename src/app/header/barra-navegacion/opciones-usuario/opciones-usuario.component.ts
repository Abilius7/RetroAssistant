import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-opciones-usuario',
  templateUrl: './opciones-usuario.component.html',
  styleUrls: ['./opciones-usuario.component.css']
})
export class OpcionesUsuarioComponent implements OnInit {

  constructor(private router: Router,private _bottomSheetRef: MatBottomSheetRef<OpcionesUsuarioComponent>) { }

  ngOnInit(): void {
  }

  cerrarSesion() {
    localStorage.removeItem('sesion');
    this.router.navigate(['/InicioSesion']);
  }

  cerrar(){
    this._bottomSheetRef.dismiss();
  }
}
