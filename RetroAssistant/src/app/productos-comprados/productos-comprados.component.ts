import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../services/compras.service';

@Component({
  selector: 'app-productos-comprados',
  templateUrl: './productos-comprados.component.html',
  styleUrls: ['./productos-comprados.component.css']
})
export class ProductosCompradosComponent implements OnInit {

  constructor(private comprasService:ComprasService) { }

  pedidos:any='';

  ngOnInit(): void {
    this.comprasService.obtenerCompras(this.obtenerIdUsuario())
    .subscribe((result)=>{
      this.pedidos=result;
    })
  }

  obtenerIdUsuario() {
    let sesion: any = window.localStorage.getItem("sesion");
    sesion = JSON.parse(sesion);
    return sesion.id;
  }

}
