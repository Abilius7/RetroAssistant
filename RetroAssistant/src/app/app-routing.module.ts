import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent} from './inicio/inicio.component';
import { CarritoComponent} from './componente-carrito/carrito/carrito.component';
import { ProductoComponent } from './producto/producto.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { CambiarContrasennaComponent } from './cambiar-contrasenna/cambiar-contrasenna.component';
import { ProductosCompradosComponent } from './productos-comprados/productos-comprados.component';
import { PanelInstrumentosComponent } from './panel-instrumentos/panel-instrumentos.component';
import { PanelAdministradorComponent } from './panel-administrador/panel-administrador.component';
import { CambiarDatosProductosComponent } from './cambiar-datos-productos/cambiar-datos-productos.component';

const routes: Routes = [
  {
    path:'',
    component:InicioComponent
  },
  {
    path:'Inicio',
    component:InicioComponent
  },
  {
    path:'Carrito',
    component:CarritoComponent
  },
  {
    path:'Producto/:nombre',
    component:ProductoComponent
  },
  {
    path:'InicioSesion',
    component:IniciarSesionComponent
  },
  {
    path:'CrearCuenta',
    component:CrearCuentaComponent
  },
  {
    path:'cambiarContrasenna',
    component:CambiarContrasennaComponent
  },
  {
    path:"ProductosComprados",
    component:ProductosCompradosComponent
  },
  {
    path:"PanelInstrumentos",
    component:PanelInstrumentosComponent
  },
  {
    path:"panelControlAdmin",
    component:PanelAdministradorComponent,
    children:[
      {
        path:"cambiarDatos",
        component:CambiarDatosProductosComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
