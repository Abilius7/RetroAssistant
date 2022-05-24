import { Component, OnInit, HostListener } from '@angular/core';
import { DatosArduinoService } from '../services/datos-arduino.service';
import { RodadasService } from '../services/rodadas.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-panel-instrumentos',
  templateUrl: './panel-instrumentos.component.html',
  styleUrls: ['./panel-instrumentos.component.css']
})
export class PanelInstrumentosComponent implements OnInit {


  constructor(private arduino: DatosArduinoService, private rodadasService: RodadasService, private usuarioService: UsuariosService) { }
  fechaHoraInicio: any = '';
  datos: any = {};
  fechaYHora: any = "";
  arrayConsumos: number[] = [];
  arrayVelocidad: number[] = [];
  distanciaRecorrida: number = 0;
  almacenamientoEnlaNueve = false;


  ngOnInit(): void {
    this.tieneServicioDeNube();

    this.fechaHoraInicio = new Date();

    window.scroll({
      top: 50,
      behavior: 'smooth'
    });

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const dias_semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

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
          this.arrayVelocidad.push(intermediario.velocidad);
          this.distanciaRecorrida += intermediario.velocidad / 3600;

          let consumoMedio = 0;
          for (let i = 0; i < this.arrayConsumos.length; i++) {
            consumoMedio += this.arrayConsumos[i];
          }
          consumoMedio = consumoMedio / this.arrayConsumos.length;

          let date = new Date();
          let hora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

          let fechaFormateada = dias_semana[date.getDay()] + ', ' + date.getDate() + ' de ' + meses[date.getMonth()] + ' de ' + date.getUTCFullYear();

          this.datos = {
            velocidad: this.trunc(intermediario.velocidad),
            porcentajeCombustible: this.trunc(intermediario.porcentajeCombustible, 0),
            litros100km: this.trunc(litros100km, 2),
            mediaConsumo: this.trunc(consumoMedio, 2),
            distanciaRecorrida: this.trunc(this.distanciaRecorrida),
            hora: hora,
            fecha:fechaFormateada,
          }

        })
    }, 1000)

    setInterval(() => {
      this.subirRodada('automatico');
    }, 300000)

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

  trunc(x: any = 0, posiciones = 0) {
    var s = x.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
    var numStr = s.substr(0, decimalLength + posiciones)
    return Number(numStr)
  }

  subirRodada(manual:string) {
    if (this.almacenamientoEnlaNueve) {
      let sesion: any = window.localStorage.getItem("sesion");
      sesion = JSON.parse(sesion);

      let date: any = new Date();
      let fechaHora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

      let duracion = date - this.fechaHoraInicio;

      let sumatorioVelocidad = 0;

      for (let i = 0; i < this.arrayVelocidad.length; i++) {
        sumatorioVelocidad += this.arrayVelocidad[i];
      }

      let velocidadMedia = sumatorioVelocidad / this.arrayVelocidad.length;

      this.rodadasService.annadirRodada(sesion.id, fechaHora, this.datos.mediaConsumo, velocidadMedia, this.datos.distanciaRecorrida, duracion)
        .subscribe((result) => {
          console.log(result);
        });
    }else{
      if (manual=='manual'){
        alert("No tienes permiso para subir datos a la nube compra el servicio en nuestra web");
      }
    }
  }

  tieneServicioDeNube() {
    let sesion: any = window.localStorage.getItem("sesion");
    sesion = JSON.parse(sesion);
    this.usuarioService.obtenerProductosUsuario(sesion.id)
      .subscribe((result) => {
        let intermediario: any = result;
        for (let i = 0; i < intermediario.length; i++) {
          if (intermediario[i] == "Almacenamiento en la nube") {
            this.almacenamientoEnlaNueve = true;
          }
        }
      });
  }

}



