import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

//rutas
import { app_routing } from './app.routes';

//servicios
import { InfoService } from './services/info.service';
import { ProductosService } from './services/productos.service';

//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PortafolioComponent } from './component/portafolio/portafolio.component';
import { AboutComponent } from './component/about/about.component';
import { ItemComponent } from './component/item/item.component';
import { BuscarComponent } from './component/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [
    InfoService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
