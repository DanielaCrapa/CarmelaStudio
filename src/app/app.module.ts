import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Layout/nav/nav.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HeaderComponent } from './Body/header/header.component';
import { NosotrosComponent } from './Body/nosotros/nosotros.component';
import { TrabajoComponent } from './Body/trabajo/trabajo.component';
import { ServiciosComponent } from './Body/servicios/servicios.component';
import { ContactoComponent } from './Body/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    NosotrosComponent,
    TrabajoComponent,
    ServiciosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
