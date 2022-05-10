import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  nombreUsuario: string = "";
  contrasenna: string = "";
  contrasennaRepetida: string = "";
  email: string = "";
  constructor(private usuariosService: UsuariosService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }

  crearUsuario() {
    let comprobarContrasenna = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    if (comprobarContrasenna.test(this.contrasenna)) {
      let validarEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      if (validarEmail.test(this.email)) {
        if (this.contrasenna == this.contrasennaRepetida) {
          this.usuariosService.crearUsuario(this.nombreUsuario, this.contrasenna, 'Usuario', this.email)
            .subscribe((result) => {
              let respuesta: any = result;
              switch (parseInt(respuesta)) {
                case 0:
                  this.snackBar.open("Error de conexion");
                  break;
                case 1:
                  this.snackBar.open("El usuario ya existe");
                  break;
                case 2:
                  this.snackBar.open("Error en la consulta");
                  break;
                case 3:
                  this.snackBar.open("Usuario creado con exito");
                  this.usuariosService.iniciarSesion(this.nombreUsuario, this.contrasenna)
                    .subscribe((result) => {
                      this.iniciarSesion(result);
                    });
                  break;
                case 4:
                  this.snackBar.open("El email ya existe");
                  break;
              }
            });
        } else {
          this.snackBar.open("Las contrasennas no coinciden");
        }
      }else{
        this.snackBar.open("Porfavor introduce un email valido");
      }
    } else {
      this.snackBar.open("Contrasenna no valida");
    }
  }

  iniciarSesion(result: any) {
    let respuesta = result;
    if (respuesta.error == "") {
      localStorage.setItem("sesion", JSON.stringify(respuesta));
      let snak = this.snackBar.open("Sesion iniciada correctamente", "Ir al inicio ", {
        duration: 3000
      });
      snak.onAction().subscribe(() => {
        this.router.navigate(["/Inicio"]);

      });

    }
  }

}

/*

La contrasenna tiene que tener entre 8 y 15 caracteres con una letra minuscula 
otra minuscula un digito sin espacios en blanco y un caracter especial ($@$!%*?&)

2dawDWEC$
*/ 