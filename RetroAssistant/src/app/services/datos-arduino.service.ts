import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosArduinoService {

  constructor(private http:HttpClient) { }

  obtenerDatos (){
    return this.http.get("http://localhost:8081/datos");
  }
}
