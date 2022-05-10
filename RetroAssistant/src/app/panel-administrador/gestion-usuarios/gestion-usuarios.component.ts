import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  constructor(private usuarioService: UsuariosService,private snackBar:MatSnackBar) { }
  displayedColumns: any = ['ID', 'Usuario', 'TipoUsuario', 'Email', 'Cambiar', 'Eliminar'];
  usuarios: any = [];
  datosOriginalesUsuarios:any = [];

  ngOnInit(): void {

    this.usuarioService.obtenerTodosUsuarios()
      .subscribe((result) => {
        this.usuarios = result;
        this.datosOriginalesUsuarios = result;
      })
  }
  eliminarUsuario(id: number) {
    this.usuarioService.eliminarUsuario(id)
      .subscribe((result) => {
        if (!result) {
          this.ngOnInit();
        } else {
          alert('Problema al eliminar el usuario');
        }
      });
  }

  cambiarUsuario(idUsuario: any) {

    let usuario:any = document.querySelector('#usuario'+idUsuario);
    let tipoUsuario:any = document.querySelector('#opcionesUsuario'+idUsuario);
    let email:any =document.querySelector('#Email'+idUsuario);
    let validarEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (usuario.value.length>0&&validarEmail.test(email.value)) {
      this.usuarioService.modificarDatosUsuario(idUsuario, usuario.value, tipoUsuario.value, email.value)
        .subscribe((result) => {
          let intermediario:any = result
          switch (parseInt(intermediario)) {
            case 0:
              let snackBar= this.snackBar.open("Cambios realizados con exito",'',{
                duration: 3000
              });
              this.ngOnInit();
              break;
            case 1:
              this.snackBar.open("El usuario ya existe");
              break;
            case 2:
              this.snackBar.open("El email ya existe");
              break;

          }
        });
    }else{
      alert ("Introduce los datos validos");
    }
  }

  filtrar (){
    let inputs:any = document.querySelectorAll(".filtrado");
    let arrayUsuariosFiltrados:any = [];
    let datosFiltrando = this.datosOriginalesUsuarios;
    let existenDatos = false;
    let primerInput = true;
    
    for (let i = 0 ;i<inputs.length;i++){
      let input = inputs[i];
      if (inputs.value != ""){
        let arrayUsuariosFiltradosPorInput=[];
        if (primerInput){
          arrayUsuariosFiltrados = this.datosOriginalesUsuarios;
        }
        for (let j=0 ; j<arrayUsuariosFiltrados.length ; j++){
          if (arrayUsuariosFiltrados[j][input.id].includes(input.value)){
            arrayUsuariosFiltradosPorInput.push(arrayUsuariosFiltrados[j]);
            existenDatos=true;
          }
        }
        if (primerInput){
          arrayUsuariosFiltrados = [];
          primerInput=false;
        }
        arrayUsuariosFiltrados=(arrayUsuariosFiltradosPorInput);
      }
      
    }
    
    if (existenDatos){
      this.usuarios=arrayUsuariosFiltrados;
    }else{
      this.usuarios=this.datosOriginalesUsuarios;
    }
    
  }

}
//zjCMuBF9^#eS3^Ib
