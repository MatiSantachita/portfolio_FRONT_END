import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { BannerComponent } from './components/banner/banner.component';
import { IndiceComponent } from './components/indice/indice.component';
import { InformacionComponent } from './components/informacion/informacion.component';

@NgModule({
  declarations:[
    AppComponent,
    ContactoComponent,
    ExperienciaComponent,
    BannerComponent,
    IndiceComponent,
    InformacionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
