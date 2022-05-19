import { Component, OnInit } from '@angular/core';
import { RodadasService } from 'src/app/services/rodadas.service';
@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.css']
})
export class MediasComponent implements OnInit {

  constructor(private rodadasService:RodadasService) { }
  datos:any = "";

  ngOnInit(): void {
    this.rodadasService.obtenerMedias(this.obtenerIdUsuario())
    .subscribe ((result)=>{
      let intermediario:any = result;
      this.datos = intermediario;
    })
  }
  

  obtenerIdUsuario() {
    let sesion: any = window.localStorage.getItem("sesion");
    sesion = JSON.parse(sesion);
    return sesion.id;
  }
}
