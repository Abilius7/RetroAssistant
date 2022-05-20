import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-annadir-producto',
  templateUrl: './annadir-producto.component.html',
  styleUrls: ['./annadir-producto.component.css']
})
export class AnnadirProductoComponent implements OnInit {

  constructor(private productosService: ProductosService) { }

  nombre: string = '';
  precio: number = 0;
  descripcion: string = '';
  imagen: string = '';
  arrayObjetos: string[] = [];
  objetoNuevo: string = '';
  ngOnInit(): void {
  }
  annadirProducto() {
    if (this.nombre.length > 0 && this.descripcion.length > 0 && (this.precio) > 0) {
     

      let alerta: any = document.querySelector("#cambiar");
      alerta.style.display = "block";


    } else {
      alert('Porfavor introduce valores validos');
    }

  }

  annadirObjeto() {
    this.arrayObjetos.push(this.objetoNuevo);
    this.objetoNuevo = '';
  }
  eliminarObjeto(indice: number) {
    this.arrayObjetos.splice(indice, 1);
  }

  confirmar($event: any) {
    if ($event.respuesta == true) {
      this.productosService.annadirProducto(this.nombre, this.descripcion, this.precio, this.imagen, this.arrayObjetos)
        .subscribe((response) => {
          if (!response) {
            alert('No ha podido annadir el producto correctamente');
          } else {
            location.reload();

          }
        });
    }
    let alerta: any = document.querySelector("#cambiar");
    alerta.style.display = "none";

    let buttons: any = document.querySelectorAll(".contenedorDeProductos button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
    }
  }
}
