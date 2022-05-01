import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  constructor(private usuarioService:UsuariosService) { }
  displayedColumns:any = ['ID','Usuario','TipoUsuario','Email','Eliminar'];
  dataSource :any =[];

  ngOnInit(): void {
    
    this.usuarioService.obtenerTodosUsuarios()
    .subscribe((result)=>{
      this.dataSource=result;
    })
  }

}
