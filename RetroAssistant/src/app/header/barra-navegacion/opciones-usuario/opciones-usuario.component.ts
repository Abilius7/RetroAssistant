import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-opciones-usuario',
  templateUrl: './opciones-usuario.component.html',
  styleUrls: ['./opciones-usuario.component.css']
})
export class OpcionesUsuarioComponent implements OnInit {

  constructor(private router: Router,private _bottomSheetRef: MatBottomSheetRef<OpcionesUsuarioComponent>,private usuarioService:UsuariosService) { }

  permisoParaPanelInstrumentos :boolean=false ;
  nombreUsuario:string='';
  tipoUsuario:string='';

  ngOnInit(): void {
    let sesion:any = localStorage.getItem("sesion");
    sesion=JSON.parse(sesion);
    this.nombreUsuario=sesion.usuario;
    this.tipoUsuario=sesion.tipoUsuario;
    this.usuarioService.obtenerProductosUsuario(sesion.id)
    .subscribe((result)=>{
      let intermediario:any = result;
      for (let i =0 ;i<intermediario.length && !this.permisoParaPanelInstrumentos;i++){
        let producto = intermediario[i];
        if (producto=="Avanzado" || producto=="Basico" || producto=="Avanzado con instalacion" || producto=="Basico con instalacion"){
          this.permisoParaPanelInstrumentos=true;
        }
      }
      
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
