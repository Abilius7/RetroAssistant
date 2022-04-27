import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annadir-producto',
  templateUrl: './annadir-producto.component.html',
  styleUrls: ['./annadir-producto.component.css']
})
export class AnnadirProductoComponent implements OnInit {

  constructor() { }

  nombre:string='';
  precio:number=0;
  descripcion:string='';
  imagen:string='';

  ngOnInit(): void {
  }
  annadirProducto(){
    
  }

}
