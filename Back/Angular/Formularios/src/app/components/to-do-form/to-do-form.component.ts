import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent {

  @Input() taskList: string[] = [];
  @Output() sendNewTask: EventEmitter<string> = new EventEmitter(); 

  handleInputTask(event: Event){
    const inputTarget = event.target as HTMLInputElement;
    this.sendNewTask.emit(inputTarget.value)
    /* el push debe succeder desde el padre ya que es el quien tiene la responsabilidad de mostrar los datos que recopila el hijo */
    inputTarget.value = "" /* esto vacía el input una vez le das a enter */

  }
}
