import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioFecha'
})
export class CambioFechaPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let fecha = new Date(value);
    console.log(this.mostrarFechaEspanol(fecha));

    return this.mostrarFechaEspanol(fecha);
  }

  mostrarFechaEspanol(fecha:any) {

    let fechaActual = new Date(fecha);
    
    let fechaCompletaEspanol = this.obtenerDiaSemana(fecha) + ", " + fechaActual.getDate() + " de " + this.obtenerMes(fecha) + " de " + fechaActual.getFullYear()+" "+this.mostrarHoraPuntos(fecha);
    return(fechaCompletaEspanol);
  }

  obtenerDiaSemana(date: any) {
    let fechaActual = new Date(date);

    let arrayDias = ["Domingo", "Lunes", "Martes", "Meircoles", "Jueves", "Sabado"];
    return (arrayDias[fechaActual.getDay()]);

  }

  obtenerMes(date: any) {
    let fechaActual = new Date(date);

    let arrayMeses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    return (arrayMeses[fechaActual.getMonth()]);

  }

   mostrarHoraPuntos (fecha:any){

    let fechaActual = new Date(fecha);
    let horaPuntos=fechaActual.getHours()+":"+fechaActual.getMinutes()+":"+fechaActual.getSeconds();
    return (horaPuntos);

}
}
