import { Component, OnInit } from '@angular/core';
import { DatosArduinoService } from '../services/datos-arduino.service';

@Component({
  selector: 'app-panel-instrumentos',
  templateUrl: './panel-instrumentos.component.html',
  styleUrls: ['./panel-instrumentos.component.css']
})
export class PanelInstrumentosComponent implements OnInit {

  constructor(private arduino:DatosArduinoService) { }
  datos:any={};
  fechaYHora:any="";
 
  ngOnInit(): void {
    setInterval(()=>{
      this.arduino.obtenerDatos()
    .subscribe((result)=>{

      let intermediario:any = result;
      
      let tiempoEnHacer100km = 100/intermediario.velocidad;
      let consumoPorHora = intermediario.litrosSegundo*3600;

      let litros100km = 0;

      if (isNaN(litros100km) || !isFinite(litros100km)){
        litros100km=0.5;
      }else{
        litros100km=tiempoEnHacer100km*consumoPorHora;
      }
      

      this.datos = {
        velocidad:intermediario.velocidad,
        porcentajeCombustible:intermediario.porcentajeCombustible,
        litros100km:litros100km
      }
      
    })
    },1000)

  }

}
