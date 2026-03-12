import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importar para fazer requisições HTTP
import { FormsModule } from '@angular/forms'; // Importar para usar ngModel

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Adicionar aos imports
    FormsModule       // Adicionar aos imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }