import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    CarritoComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  exports:[
    CarritoComponent
  ]
})
export class ComponenteCarritoModule { }
