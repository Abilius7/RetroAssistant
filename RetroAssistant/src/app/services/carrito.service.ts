import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  ruta:string='/retroAssistant/Carrito';

  constructor(private http: HttpClient) { }

  obtenerCarrito(id: number) {

    return this.http.post(this.ruta+"/obtenerCarrito.php", { "id": id });

  }
  eliminarProducto(id: number, producto: string, numero: number) { 
    return this.http.post(this.ruta+"/eliminarProducto.php", { "id": id, "producto": producto, "numero": numero });

  }
  eliminarProductosUsuario(id: number) {
    return this.http.post(this.ruta+"/eliminarProductosUsuario.php", { "id": id });
  }

  annadirProducto (idUsuario:string,producto:string,cantidad:number){

    let parametros = {"usuario":idUsuario,"producto":producto,"cantidad":cantidad};

    return this.http.post(this.ruta+"/annadirProducto.php",JSON.stringify(parametros));
  }

}
