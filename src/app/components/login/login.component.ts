import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter} from '@angular/core';
import { ServicioLoginService } from '../../Services/servicio-login.service';
import Swal from 'sweetalert2'
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})

export class LoginComponent implements OnInit {

  @Output() newID = new EventEmitter<any>();

  Id: Number = 0;
  User:any;
  Pwd:any;
  Nombre : any;
  Correo : any;
  Telefono : any;
  Entidad : any;
  MostrarLogueo : Boolean = true;
  MostrarRegistro : Boolean = false;
  spiner : Boolean = false;

  constructor( private ServicioLogin : ServicioLoginService,private router:Router) {

   }

  ngOnInit(): void {
  }
  
  Loguear(){

    this.ServicioLogin.Consultar(this.User,this.Pwd).subscribe((data)=>{
      this.Entidad = data;
      this.Id = this.Entidad.Id;
      this.Token(this.Id);
      if(this.Id > 0){
        this.router.navigate(['/Cliente']);
      }
    });

  }
  validarTecla(event: any){
    if(event.keyCode == 13){
      this.Loguear();
    }
  }
  Registrar(){
      this.Filtrar();
      console.log(this.Entidad);
      this.spiner = true;
      this.ServicioLogin.Registrar(this.Entidad).subscribe();

      setTimeout(() => {
        if(this.Entidad.nombre && this.Entidad.user && this.Entidad.pwd && this.Entidad.correo != ""){
        this.Regresar();
        this.spiner = false;
        Swal.fire(
          'Bienvenido' + ' '+ this.User,
          'Su Informacion ha sido guadada correctamente',
          'success'
        )
        }
        else{
          this.spiner = false;
          Swal.fire(
            'Atencion!',
            'Llene completamente los campos',
            'warning'
          )
        }
      }, 1500);
  }
  NuevoUsuario(){
    this.Limpiar();
    this.MostrarLogueo = false;
    this.MostrarRegistro = true;
    console.log("Funciona");

  }

  Regresar(){
    this.MostrarLogueo = true;
    this.MostrarRegistro = false;
  }
  Filtrar(){
    this.Entidad = {"user" : this.User ,"nombre" : this.Nombre,"email" : this.Correo, "pwd" : this.Pwd,"telefono" : this.Telefono}
  }
  Limpiar(){
    this.Nombre = "";
    this.Correo = "";
    this.Pwd = "";
    this.Telefono = "";
    this.User = "";
  }
  Token(id : any){
      varID = id;
  }
  EstaLogueado(){
    if(varID > 0){
      return true;
    }
    else{
      return false;
    }
  }
  DesLoguear(){
    varID = 0;
    return false;
  }
}

let varID : number;


