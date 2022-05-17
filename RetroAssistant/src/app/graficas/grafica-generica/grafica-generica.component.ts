import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-grafica-generica',
  templateUrl: './grafica-generica.component.html',
  styleUrls: ['./grafica-generica.component.css']
})
export class GraficaGenericaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    new Chart("myChart", {
      type: 'line',
      data: {
          datasets: [{
              label: 'Current Vallue',
              data: [0, 20, 100],
              backgroundColor: "rgb(115 185 243 / 65%)",
              borderColor: "#007ee7",
              fill: true,
          },
         ],
          labels: ['January 2019', 'February 2019', 'March 2019']
      },
  });

  }

}
