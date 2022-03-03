import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  ruta:string='/retroAssistant/Compras';

  constructor(private http:HttpClient) { }

  comprarProducto(id:number,productos:any[]){
    return this.http.post(this.ruta+"/comprarProductos.php",{"id":id,"productos":productos});
  }

  obtenerCompras (id:number){
    return this.http.post(this.ruta+"/obtenerPedidos.php",{"idUsuario":id});
  }

  obtenerProductos (id:number){
    return this.http.get(this.ruta+"/obtenerProductos.php?id="+id);
  }
}
