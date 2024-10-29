import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  public tasks: string [] = ['Estudiar', 'Ir a la compra'];

  receiveTaskFromChild(task: string){
    this.tasks.push(task)
  }


}
