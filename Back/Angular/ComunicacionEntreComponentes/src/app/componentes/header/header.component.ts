import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 public titulo: string = "AQUI VA EL TITULO" /* aquí definimos la variable que contiene el string titulo, la llamamos en header.html después de llamar lo que nos envía el padre que sería title.ts*/
 @Input() productosRecibidosDeApp: any = [];

}
