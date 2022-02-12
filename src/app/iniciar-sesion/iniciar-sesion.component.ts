import { Component, OnInit, NgModule } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  constructor(private iniciarSesionService: UsuariosService,
    private snackBar: MatSnackBar,
    private router:Router) { }

  usuario: string = "";
  contrasena: string = "";



  ngOnInit(): void {
  }

  iniciarSesion() {
    this.iniciarSesionService.iniciarSesion(this.usuario, this.contrasena)
      .subscribe(result => {
        let respuesta: any = result;

        if (respuesta.error) {
          this.snackBar.open(respuesta.error);
        } else {
          let snackBar= this.snackBar.open("Sesion iniciada correctamente","Ir al inicio",{
            duration: 3000
          });
          localStorage.setItem("sesion", JSON.stringify(respuesta))
          snackBar.onAction().subscribe(()=>{

            this.router.navigate(["/Inicio"]);

          });
      
        }
      });
  }

}
