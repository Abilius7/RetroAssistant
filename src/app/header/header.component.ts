import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titulo: string = "";
  constructor() { }

  ngOnInit(): void {
    let url = window.location.href;
    let ultimoParametro = url.split("/")[url.split("/").length - 1];
    let titulo = "Inicio";
    if (ultimoParametro != "") {
      titulo = ultimoParametro.replace(/%20/g," ");
    }
    this.titulo = titulo;
  }

  
  cambiarTitulo(titulo:string) {
    this.titulo=titulo;
  }
   
}
