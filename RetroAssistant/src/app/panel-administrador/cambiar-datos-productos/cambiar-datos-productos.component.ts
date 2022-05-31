import { Component, OnInit } from '@angular/core';
import { ObtenerProductosService } from '../../services/obtener-productos.service';
import { ProductosService } from '../../services/productos.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertaComponent } from 'src/app/alerta/alerta.component';


@Component({
  selector: 'app-cambiar-datos-productos',
  templateUrl: './cambiar-datos-productos.component.html',
  styleUrls: ['./cambiar-datos-productos.component.css']
})
export class CambiarDatosProductosComponent implements OnInit {

  constructor(private productos: ObtenerProductosService, private httpProducto: ProductosService, public dialog: MatDialog) { }

  arrayProductos: any = '';
  nombreProductoNuevo: string = '';
  idProducto:any = 0;
  accion:string='';
  idUsuario:any="";
  ngOnInit(): void {
    this.productos.devolverProductos().subscribe((response) => {
      let intermediario: any = response
      this.arrayProductos = intermediario.productos;
    })
  }

  eliminar(id: string) {

    let alerta:any = document.querySelector("#cambiar");
    alerta.style.display="block";
    this.accion='eliminar';
    this.idProducto= id;
    let buttons:any = document.querySelectorAll(".contenedorDeProductos button");
    for (let i = 0 ; i<buttons.length;i++){
      buttons[i].disabled=true;
    }

  }
  cambiar(id: number) {

    let nombre: any = document.querySelector('#nombre' + id);
    let descripcion: any = document.querySelector('#descripcion' + id);
    let imagen: any = document.querySelector('#imagen' + id);
    let precio: any = document.querySelector('#precio' + id);

    let tabla: any = document.querySelector('.id' + id);
    let visualizarInputs = true;
    if (tabla.querySelector('span').hidden == true) {
      visualizarInputs = false;
      if (nombre.value.length > 0 && descripcion.value.length > 0 && !isNaN(precio.value)&& 0!=(precio.value)) {

        let alerta:any = document.querySelector("#cambiar");
        alerta.style.display="block";
        this.idProducto= id;
        this.accion='cambiar';
        let buttons:any = document.querySelectorAll(".contenedorDeProductos button");
        for (let i = 0 ; i<buttons.length;i++){
          buttons[i].disabled=true;
        }
      } else {
        alert('Porfavor introduce valores validos');
      }

    }

    let spans: any = tabla.querySelectorAll('.dato,img');
    for (let i = 0; i < spans.length; i++) {
      let elemento = spans[i];
      elemento.hidden = visualizarInputs;

    }
    let inputs = tabla.querySelectorAll('input,textarea,.inputImg,.botonesEliminar');
    for (let i = 0; i < inputs.length; i++) {
      let elemento = inputs[i];
      elemento.hidden = !visualizarInputs;
      for (let i = 0; i < elemento.childNodes.length; i++) {
        elemento.childNodes[i].hidden = !visualizarInputs;
      }
    }

  }

  eliminarObjeto(objeto: string, idProducto: number) {

    this.httpProducto.eliminarObjeto(objeto, idProducto)
      .subscribe((result) => {
        if (result) {
          for (let  i =0  ;i<this.arrayProductos.length;i++){
            if (this.arrayProductos[i].idProducto == idProducto){
              let arrayObjetos = this.arrayProductos[i].paquete;
              for (let j = 0 ;j<arrayObjetos.length;j++){
                if (arrayObjetos[j].objeto == objeto){
                  this.arrayProductos[i].paquete.splice(j,1);
                }
              }
              
            }
          }
        } else {
          alert('Ha ocurrido un problema');
        }
      })
  }

  annadirObjeto(idProduto: number) {
    let objeto: any = document.querySelector("#nuevoObjeto" + idProduto);
    this.httpProducto.annadirObjeto(objeto.value, idProduto)
      .subscribe((result) => {

        if (result) {
          for (let  i =0  ;i<this.arrayProductos.length;i++){
            if (this.arrayProductos[i].idProducto == idProduto){
              this.arrayProductos[i].paquete.push({'producto':idProduto,'objeto':objeto.value});
            }
          }
        } else {
          alert('El objeto ya existe en la lista de objetos de este producjto');
        }
      });
  }
  confirmar($event:any){
    if ($event.accion=="cambiar"){
      let id= $event.idProducto;
      let nombre: any = document.querySelector('#nombre' + id);
      let descripcion: any = document.querySelector('#descripcion' + id);
      let imagen: any = document.querySelector('#imagen' + id);
      let precio: any = document.querySelector('#precio' + id);

      if ($event.respuesta==true){
        this.httpProducto.actualizarProducto(nombre.value, descripcion.value, precio.value, imagen.value, id)
            .subscribe((result) => {
              this.ngOnInit();
              
            })
      }
    }else if ($event.accion="eliminar"){
      if ($event.respuesta==true){
        this.httpProducto.eliminarProducto($event.idProducto)
        .subscribe((response) => {
          this.ngOnInit();
        })
      }
    }

    let alerta:any = document.querySelector("#cambiar");
    alerta.style.display="none";

    let buttons:any = document.querySelectorAll(".contenedorDeProductos button");
        for (let i = 0 ; i<buttons.length;i++){
          buttons[i].disabled=false;
        }
    
  }
}
