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

    let final=0;
    if (screen.width <768){
      final=25
      e.target.parentNode.style.display = "inline-block";
      if (e.target.parentNode.querySelector("figcaption").style.visibility == "hidden") {
        e.target.parentNode.querySelector("figcaption").style.visibility = "visible";
        e.target.parentNode.querySelector("figcaption").style.display = "inline-block";
        e.target.parentNode.querySelector("figcaption").style.marginLeft="5%";
      }else{
        e.target.parentNode.querySelector("figcaption").style.visibility = "hidden";
        e.target.parentNode.querySelector("figcaption").style.display = "none"
      }
    }else{
      final=45;
      if (e.target.parentNode.querySelector("figcaption").style.visibility == "hidden") {
        let contador = final;
        e.target.parentNode.querySelector("figcaption").style.visibility = "hidden";
        e.target.parentNode.querySelector("figcaption").style.display = "none";
        let animacionEntrada = setInterval(() => {
          e.target.parentNode.querySelector("img").style.left = contador + "%";
          contador--;
          if (contador == 0) {
            clearInterval(animacionEntrada);
            e.target.parentNode.querySelector("figcaption").style.visibility = "visible";
            e.target.parentNode.querySelector("figcaption").style.display = "block";
          }
        }, 20)
      }else{
        e.target.parentNode.querySelector("figcaption").style.visibility = "hidden"
        e.target.parentNode.querySelector("figcaption").style.display = "none";
        let contador = e.target.parentNode.querySelector("img").style.left.split("%")[0];
        let animacionSalida = setInterval(() => {
          e.target.parentNode.querySelector("img").style.left = contador + "%";
          contador++;
          if (contador == final) {
            clearInterval(animacionSalida);
            ;
          }
        }, 10)
      }
    }

    

  }

}
