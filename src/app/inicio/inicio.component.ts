import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let documento:any =window.document;
    let figCaptions:any =documento.querySelectorAll("figcaption");
    for (let i=0;i<figCaptions.length;i++){
      figCaptions[i].style.visibility ="hidden";
    }
  }


  visibilizarDescripcion(e: any) {
    if (e.target.parentNode.querySelector("figcaption").style.visibility == "hidden") {
      let contador = 45;
      e.target.parentNode.querySelector("figcaption").style.visibility = "hidden";
      let animacionEntrada = setInterval(() => {
        e.target.parentNode.querySelector("img").style.left = contador + "%";
        contador--;
        if (contador == 0) {
          clearInterval(animacionEntrada);
          e.target.parentNode.querySelector("figcaption").style.visibility = "visible";
        }
      }, 20)
    }else{
      e.target.parentNode.querySelector("figcaption").style.visibility = "hidden"
      let contador = e.target.parentNode.querySelector("img").style.left.split("%")[0];
      let animacionSalida = setInterval(() => {
        e.target.parentNode.querySelector("img").style.left = contador + "%";
        contador++;
        if (contador == 46) {
          clearInterval(animacionSalida);
          ;
        }
      }, 10)
    }

  }

  invisibilizarDescripcion(e: any) {
    if (e.target.parentNode.querySelector("figcaption").style.visibility == "visible") {
      e.target.parentNode.querySelector("figcaption").style.visibility = "hidden"
      let contador = e.target.parentNode.querySelector("img").style.left.split("%")[0];
      let animacionSalida = setInterval(() => {
        e.target.parentNode.querySelector("img").style.left = contador + "%";
        contador++;
        if (contador == 46) {
          clearInterval(animacionSalida);
          ;
        }
      }, 10)
    }
  }

}
