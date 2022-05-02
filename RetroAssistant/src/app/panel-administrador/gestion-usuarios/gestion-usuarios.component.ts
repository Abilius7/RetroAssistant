import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  constructor(private usuarioService:UsuariosService) { }
  displayedColumns:any = ['ID','Usuario','TipoUsuario','Email','Cambiar','Eliminar'];
  dataSource :any =[];

  ngOnInit(): void {
    
    this.usuarioService.obtenerTodosUsuarios()
    .subscribe((result)=>{
      this.dataSource=result;
    })
  }
  eliminarUsuario (id:number){
    this.usuarioService.eliminarUsuario(id)
    .subscribe((result)=>{
      if (!result){
        this.ngOnInit();
      }else{
        alert('Problema al eliminar el usuario');
      }
    });
  }

  cambiarUsuario ($event:any){
    let fila = $event.target.parentElement.parentElement.parentElement;
    let id =fila.childNodes[0].textContent;
    let usuario = fila.childNodes[1].childNodes[0].value;
    let tipoUsuario = fila.childNodes[2].childNodes[0].value;
    let  email = fila.childNodes[3].childNodes[0].value;
    this.usuarioService.modificarDatosUsuario(id,usuario,tipoUsuario,email)
    .subscribe((result)=>{
      if (result){
        this.ngOnInit();
      }else{
        alert("Problema al actualizar los datos");
      }
    });
  }

}
