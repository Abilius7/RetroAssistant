import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BarraNavegacionComponent } from './header/barra-navegacion/barra-navegacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoComponent } from './producto/producto.component';
import { MatSelectModule } from '@angular/material/select'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card'; 
import { MatButtonModule} from '@angular/material/button'; 
import { MatInputModule} from '@angular/material/input';
import { FormsModule} from '@angular/forms';
import { MatTableModule} from '@angular/material/table'; 
import { MatIconModule} from '@angular/material/icon';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component'; 
import { MatSnackBarModule} from '@angular/material/snack-bar'; 
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { OpcionesUsuarioComponent } from './header/barra-navegacion/opciones-usuario/opciones-usuario.component';
import { CambiarContrasennaComponent } from './cambiar-contrasenna/cambiar-contrasenna.component';
import { ProductosCompradosComponent } from './productos-comprados/productos-comprados.component';
import { PedidoComponent } from './productos-comprados/pedido/pedido.component';
import { ComponenteCarritoModule } from './componente-carrito/componente-carrito.module';
import { CambioFechaPipe } from './cambio-fecha.pipe';
import { MatToolbarModule} from '@angular/material/toolbar';
import { PanelInstrumentosComponent } from './panel-instrumentos/panel-instrumentos.component';
import {GaugesModule} from 'ng-canvas-gauges';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PanelAdministradorComponent } from './panel-administrador/panel-administrador.component';
import { CambiarDatosProductosComponent } from './panel-administrador/cambiar-datos-productos/cambiar-datos-productos.component';
import { AnnadirProductoComponent } from './panel-administrador/annadir-producto/annadir-producto.component';
import { GestionUsuariosComponent } from './panel-administrador/gestion-usuarios/gestion-usuarios.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarraNavegacionComponent,
    InicioComponent,
    ProductoComponent,
    IniciarSesionComponent,
    CrearCuentaComponent,
    OpcionesUsuarioComponent,
    CambiarContrasennaComponent,
    ProductosCompradosComponent,
    PedidoComponent,
    CambioFechaPipe,
    PanelInstrumentosComponent,
    PanelAdministradorComponent,
    CambiarDatosProductosComponent,
    AnnadirProductoComponent,
    GestionUsuariosComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    ComponenteCarritoModule,
    MatToolbarModule,
    GaugesModule,
    LayoutModule,
    MatSidenavModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
