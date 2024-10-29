import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { TitleComponent } from './componentes/title/title.component';
import { PadreComponent } from './componentes/padre/padre.component';
import { HijoComponent } from './componentes/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    HeaderComponent,
    ProductosComponent,
    TitleComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
