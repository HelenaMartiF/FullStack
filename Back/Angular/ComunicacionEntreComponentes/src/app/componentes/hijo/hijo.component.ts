import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {


  @Input() nombre: string = "";
  @Output() emisorParaCambiarNombre: EventEmitter<string> = new EventEmitter();
  cambiarNombre(event: Event){
    const username = event.target as HTMLInputElement
    this.emisorParaCambiarNombre.emit(username.value);
  }
}
