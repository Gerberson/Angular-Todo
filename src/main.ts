// Necessario para trabalhar em produção
// import com "@" estão sendo importado do node_modules
import { enableProdMode } from '@angular/core';
// Para criar aplicações mobile nativa
// import com "@" estão sendo importado do node_modules
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Obrigatorio ter um modulo raiz (root)
// import com "./" estão sendo importado das pasta da aplicação
import { AppModule } from './app/app.module';
// São nossas variaveis em ambiente
// import com "./" estão sendo importado das pasta da aplicação
import { environment } from './environments/environment';

// Necessario para habilitar o modulo de produção
if (environment.production) {
  enableProdMode();
}

// Realiza o carregamento web ou mobile da aplicação
// Nesse caso esta carregando AppModule
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
