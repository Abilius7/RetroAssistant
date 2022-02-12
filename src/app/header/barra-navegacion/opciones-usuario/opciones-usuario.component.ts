import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones-usuario',
  templateUrl: './opciones-usuario.component.html',
  styleUrls: ['./opciones-usuario.component.css']
})
export class OpcionesUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cerrarSesion (){
    localStorage.removeItem('sesion');
    let servidor  ="http://"+window.location.toString().split("/")[2];
      window.location.replace(servidor+"/InicioSesion");
  }
}
