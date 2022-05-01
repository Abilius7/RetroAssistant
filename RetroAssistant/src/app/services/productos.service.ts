import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  eliminarProducto (id:string){
    return this.http.post("/retroAssistant/Compras/eliminarProducto.php",{'id':id});
  }
  eliminarObjeto (objeto:string,idProducto:number){
    return this.http.post("/retroAssistant/Compras/eliminarObjetoDeProducto.php",{'objeto':objeto,'idProducto':idProducto});
  }
  annadirObjeto (nombreObjeto:string,idProducto:number){
    return this.http.post("/retroAssistant/Compras/annadirObjetoProducto.php",{'objeto':nombreObjeto,'idProducto':idProducto});
  }
  actualizarProducto (nombre:string,descripcion:string,precio:Number,imagen:string,idProducto:number){
    return this.http.post("/retroAssistant/Compras/actualizacionDatosProducto.php",{'nombre':nombre,'idProducto':idProducto,'descripcion':descripcion,'precio':precio,'imagen':imagen});
  }
  annadirProducto (nombre:string,descripcion:string,precio:Number,imagen:string){
    return this.http.post("/retroAssistant/Compras/annadirProducto.php",{'nombre':nombre,'descripcion':descripcion,'precio':precio,'imagen':imagen});
  }
  
}
