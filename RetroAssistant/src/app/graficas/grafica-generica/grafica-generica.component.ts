import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { RodadasService } from 'src/app/services/rodadas.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-grafica-generica',
  templateUrl: './grafica-generica.component.html',
  styleUrls: ['./grafica-generica.component.css']
})
export class GraficaGenericaComponent implements OnInit {

  constructor(private rodadasService:RodadasService,private rutaActiva: ActivatedRoute) { }

  tipo:string="";
  ngOnInit(): void {

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.tipo = params['tipo'];

        this.rodadasService.obtenerDatosGrafica(this.obtenerIdUsuario(),this.tipo)
        .subscribe((result)=>{
          console.log(result);
          let intermediario:any = result;

          let velocidad = intermediario.intervalos;
          let consumos = intermediario.consumos;

          new Chart("myChart", {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Consumo',
                    data: consumos,
                    backgroundColor: "rgb(115 185 243 / 65%)",
                    borderColor: "#007ee7",
                    fill: false,
                },
              ],
                labels: velocidad
            },

        });

        });
      }
    );
    
    

  }
  obtenerIdUsuario() {
    let sesion: any = window.localStorage.getItem("sesion");
    sesion = JSON.parse(sesion);
    return sesion.id;
  }

}
