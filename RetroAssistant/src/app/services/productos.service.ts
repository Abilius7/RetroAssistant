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
}
