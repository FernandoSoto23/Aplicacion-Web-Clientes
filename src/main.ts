import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/* 

//darkmode

document.addEventListener('DOMContentLoaded', function(){

  
  darkMode();
});

function darkMode(){


  //esto es para darkkmode con el sistema de preferencia
   const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

  if(prefiereDarkMode.matches){
      document.body.classList.add('dark-mode');
      document.getElementById("dark")?.classList.add("dark-mode");
      
  }else{
      document.body.classList.remove('dark-mode');
  } 

  prefiereDarkMode.addEventListener('change', function(){
      if(prefiereDarkMode.matches){
          document.body.classList.add('dark-mode');
      }else{
          document.body.classList.remove('dark-mode');
      }
  })
}
let a = document.getElementById("a-click");

a?.addEventListener("click",function(){
  console.log("hola");
});
darkMode();



 */