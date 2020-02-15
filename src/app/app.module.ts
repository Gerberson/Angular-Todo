// Esta importando para rodar via browser epode trabalhar com mobile
import { BrowserModule } from '@angular/platform-browser';
// NgModule porque este é um modulo por isso deve ser importado
import { NgModule } from '@angular/core';
// Importa um componente por ser o primeiro é obrigatorio
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'

// Este bloco é um decoraitor do mudulo
@NgModule({
  declarations: [// Colocar os componentes que vão ter nesse modulo
    AppComponent
  ],
  imports: [// Colocar todo extra que vai utilizar como modulos extra
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [], // Tudo que vai prover para todos os componentes 
  bootstrap: [AppComponent] // Qual componente esta aplicação vai carregar quando iniciar
})

// export significa classe publica
export class AppModule { }
