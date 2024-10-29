import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  nombreParaMiHijo: string = "Marta";

  nombreNuevo(nombre: string){
    this.nombreParaMiHijo = nombre
  }
}