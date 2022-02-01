import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NoticiasModule } from './app/noticias/noticias.module';
import { NavModule } from './app/nav/nav.module';
import { NoticiasProvider } from './providers/noticia.provider';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    NoticiasModule,
    HttpClientModule
  ],
  providers: [NoticiasProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
