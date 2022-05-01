import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  ruta:string='/retroAssistant/Usuarios';

  iniciarSesion (usuario:string,contrasenna:string){
    return this.http.post(this.ruta+"/iniciarSesion.php",{"usuario":usuario,"contrasenna":contrasenna});
  }

  crearUsuario (usuario:string,contrasenna:string,tipo:string){
    return this.http.post(this.ruta+"/crearUsuario.php",{"usuario":usuario,"contrasenna":contrasenna,'tipo':tipo});
  }
  cambiarContrasenna (usuario:string,contrasenna:string,contrasennaNueva:string){
    return this.http.post(this.ruta+"/cambiarContrasenna.php",{"nombreUsuario":usuario,"contrasenna":contrasenna,"contrasennaNueva":contrasennaNueva});
  }

  obtenerTodosUsuarios (){
    return this.http.post(this.ruta+"/obtenerUsuarios.php",{});
  }
}
