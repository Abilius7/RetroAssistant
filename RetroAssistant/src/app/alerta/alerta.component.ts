import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {
  @Output() pulsado = new EventEmitter();
  @Input() idProducto:any ='';
  @Input() accion:any ='';

  constructor() { }

  ngOnInit(): void {
  }

  eventoAceptar(){
    this.pulsado.emit({'respuesta':true,'idProducto':this.idProducto,'accion':this.accion});
  }

  eventoCancelar(){
    this.pulsado.emit({'respuesta':false,'idProducto':this.idProducto,'accion':this.accion});
  }

}
