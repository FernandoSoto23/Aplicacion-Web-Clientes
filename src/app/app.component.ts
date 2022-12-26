import { Component } from '@angular/core';
import { ServicioClienteService } from './Services/servicio-cliente.service';
import { ServicioListaClienteService } from './Services/servicio-lista-cliente.service';
import {LoginComponent} from "./components/login/login.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ServicioClienteService,ServicioListaClienteService,LoginComponent]
})
export class AppComponent {
  title = 'appAngular';
  Usuario : Number = 0;
  mostrarLogin : Boolean;
  mostrarPanel : Boolean;
  Valor : any;
  constructor(private Checar : LoginComponent){
    this.mostrarLogin = true;
    this.mostrarPanel = false; 
    this.EstaLog();
  }
  addItem(newItem: any) {


    this.Usuario = newItem;
    console.log("el valor de usuario es" + this.Usuario) ;
    if(this.Usuario > 0){
      this.mostrarLogin = false;
      this.mostrarPanel = true;
    }
  }
  EstaLog(){
    return this.Checar.EstaLogueado();
  }
  LogOut(){
    return this.Checar.DesLoguear();
  }
}


