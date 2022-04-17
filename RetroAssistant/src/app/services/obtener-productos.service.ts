import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObtenerProductosService {

  constructor(private http: HttpClient) { }
  devolverProductos() {

    return this.http.get("/retroAssistant/obtenerProductos.php");

  }


} 
