import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RodadasService {

  constructor(private http: HttpClient) {}

  annadirRodada (idUsuario:number,fechaHora:any,consumoMedio:any,velocidadMedia:any,distancia:any,duracion:any){
    return this.http.post("/retroAssistant/Rodadas/subirRodada.php",{'idUsuario':idUsuario,'fechaHora':fechaHora,'consumoMedio':consumoMedio,'velocidadMedia':velocidadMedia,'distancia':distancia,'duracion':duracion});
  }
  obtenerDatosGrafica (idUsuario:number,opcion:string){
    return this.http.post("/retroAssistant/Rodadas/obtenerDatosVelocidadConsumo.php",{'idUsuario':idUsuario,'opcion':opcion});
  }

  obtenerMedias(idUsuario:number){
    return this.http.post("/retroAssistant/Rodadas/obtenerMedias.php",{'idUsuario':idUsuario});
  }

}
