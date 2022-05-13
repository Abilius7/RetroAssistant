import { Component, OnInit, HostListener } from '@angular/core';
import { DatosArduinoService } from '../services/datos-arduino.service';
import { RodadasService } from '../services/rodadas.service';

@Component({
  selector: 'app-panel-instrumentos',
  templateUrl: './panel-instrumentos.component.html',
  styleUrls: ['./panel-instrumentos.component.css']
})
export class PanelInstrumentosComponent implements OnInit {

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander() {
    let sesion: any = window.localStorage.getItem("sesion");
    sesion = JSON.parse(sesion);

    let date: any = new Date();
    let fechaHora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    let duracion = this.fechaHoraInicio - date;

    this.rodadasService.annadirRodada(sesion.id, fechaHora, this.datos.mediaConsumo, 0, this.datos.distanciaRecorrida, duracion)
      .subscribe((result) => {
        console.log(result);
      });
  }

  constructor(private arduino: DatosArduinoService, private rodadasService: RodadasService) { }
  fechaHoraInicio: any = '';
  datos: any = {};
  fechaYHora: any = "";
  arrayConsumos: number[] = [];
  distanciaRecorrida: number = 0;

  ngOnDestroy() {

    let sesion: any = window.localStorage.getItem("sesion");
    sesion = JSON.parse(sesion);

    let date: any = new Date();
    let fechaHora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    let duracion = this.fechaHoraInicio - date;

    this.rodadasService.annadirRodada(sesion.id, fechaHora, this.datos.mediaConsumo, 0, this.datos.distanciaRecorrida, duracion)
      .subscribe((result) => {
        console.log(result);
      });
  }

  ngOnInit(): void {

    this.fechaHoraInicio = new Date();

    window.scroll({
      top: 50,
      behavior: 'smooth'
    });

    setInterval(() => {
      this.arduino.obtenerDatos()
        .subscribe((result) => {

          let intermediario: any = result;

          let tiempoEnHacer100km = 100 / intermediario.velocidad;


          let consumoPorHora = intermediario.litrosSegundo * 3600;

          let litros100km = 0;

          if (consumoPorHora == 0) {
            litros100km = 0;
          } else if (intermediario.velocidad == 0) {
            litros100km = consumoPorHora;
          }
          else {
            litros100km = tiempoEnHacer100km * consumoPorHora;

          }
          this.arrayConsumos.push(litros100km);
          this.distanciaRecorrida += intermediario.velocidad / 3600;

          let consumoMedio = 0;
          for (let i = 0; i < this.arrayConsumos.length; i++) {
            consumoMedio += this.arrayConsumos[i];
          }

          let date = new Date();
          this.fechaYHora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

          this.datos = {
            velocidad: intermediario.velocidad,
            porcentajeCombustible: intermediario.porcentajeCombustible,
            litros100km: litros100km,
            mediaConsumo: consumoMedio,
            distanciaRecorrida: this.distanciaRecorrida,
            fechaHora: this.fechaYHora,
          }

        })
    }, 1000)

  }
  cambiarTemaClaro() {
    let table: any = document.querySelector("table");
    table.className = table.className + " temaClaro";
    table.className = table.className.replaceAll("temaOscuro", "");
  }
  cambiarTemaOscuro() {
    let table: any = document.querySelector("table");
    table.className = table.className + " temaOscuro";
    table.className = table.className.replaceAll("temaCalro", "");
  }

}
