import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';
import { FormulariosClasicosComponent } from './components/formularios-clasicos/formularios-clasicos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulariosReactivosComponent } from './components/formularios-reactivos/formularios-reactivos.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoFormComponent,
    FormulariosClasicosComponent,
    FormulariosReactivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, /* importamos FormsModule --> módulo que proporciona funcionalidades para trabajar con formularios */
    ReactiveFormsModule /* para formularios reactivos */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
