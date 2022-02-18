import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cambiar-contrasenna',
  templateUrl: './cambiar-contrasenna.component.html',
  styleUrls: ['./cambiar-contrasenna.component.css']
})
export class CambiarContrasennaComponent implements OnInit {
  nombreUsuario: string = "";
  contrasennaActual: string = "";
  contrasennaNueva: string = "";
  contrasennaRepetida: string = "";
  constructor(private usuarios: UsuariosService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.nombreUsuario = this.obtenerNombreUsuario();
  }

  obtenerNombreUsuario() {
    let sesion: any = localStorage.getItem('sesion');
    let sesionJSON = JSON.parse(sesion);
    return sesionJSON.usuario;
  }
  cambiarContrasenna() {
    let comprobarContrasenna = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    if (comprobarContrasenna.test(this.contrasennaNueva)) {
      if (this.contrasennaNueva == this.contrasennaRepetida) {
        if (this.comprobarSesionIniciada()) {
          this.usuarios.cambiarContrasenna(this.nombreUsuario, this.contrasennaActual, this.contrasennaNueva)
            .subscribe((result) => {
              console.log(result);
              this.interpretarResultado(result);
            })
        } else {
          this.snack.open("Porfavor antes inicia sesion",'',{
            duration: 3000
          });
        }
      } else {
        this.snack.open("Las contrasennas no coinciden",'',{
          duration: 3000
        });
      }
    } else {
      this.snack.open("La contrasenna no es valida",'',{
        duration: 3000
      });
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

  interpretarResultado(result: any) {
    switch (parseInt(result)) {
      case 0:
        this.snack.open("Error de conexion",'',{
          duration: 3000
        });
        break;
      case 1:
        
        this.snack.open("El usuario no existe",'',{
          duration: 3000
        });
        break;
      case 2:
        this.snack.open("La contrasenna no coincide",'',{
          duration: 3000
        });
        break;
      case 3:
        this.snack.open("Contrasenna cambiada con exito",'',{
          duration: 3000
        });
        break;
    }
  }

}
