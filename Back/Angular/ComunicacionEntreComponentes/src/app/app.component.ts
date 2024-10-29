import { Component } from '@angular/core';
import { productos } from 'src/productos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'COMUNICACION-ENTRE-COMPONENTES';
  public productosQueEnviaElPadre = productos /* aquí le establecemos la variable que vamos a exportar al hijo, productos.ts */
  public productosRecibidosDelHijo: any = []

  recibirProductosDelHijo(producto: any){
    this.productosRecibidosDelHijo.push(producto)
  }
}
