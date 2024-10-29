import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

@Input() productosQueRecibeElHijo: any = []  /* importamos los productos del padre (app.ts) y le decimos any para que importe cualquier*/
@Output() emisorDeProductosElegidos: EventEmitter<any> = new EventEmitter()


 addProduct(producto: any){
  this.emisorDeProductosElegidos.emit(producto)
 }
}
