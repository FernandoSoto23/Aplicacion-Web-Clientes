import { Component, OnInit } from '@angular/core';
import { ServicioListaClienteService } from '../../Services/servicio-lista-cliente.service';




@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})

export class ListaClienteComponent implements OnInit {
  Boolean:any;
  Boolean2:any;
  ocultar : Boolean;
  ocultar2 : Boolean;
  Id:any;
  Nombre:any;
  Direccion:any;
  RFC: any;
  Correo:any;
  Tel:any;
  
  Entidad: any;

  filtro:any;

  constructor(private ServicioListaCliente : ServicioListaClienteService) {
    this.Mostrar();
    this.ocultar = true;
    this.ocultar2 = false;
  }
  
  ngOnInit(): void {
  }
  Mostrar(){
      this.ServicioListaCliente.Consultar().subscribe((data)=>{
        this.Entidad = data;
        this.Id = this.Entidad.Id;
        this.Nombre = this.Entidad.Nombre;
        this.Direccion = this.Entidad.Direccion;
        this.RFC = this.Entidad.RFC;
        this.Correo = this.Entidad.Correo;
        this.Tel = this.Entidad.Telefono;
        this.Entidad.shift();
      })
  }
  data :any = [];
  Filtrar(){
    this.data = [];
    this.Entidad.forEach((e:any=[],index : number) => { 
    if(e.Nombre.match(this.filtro)){
      this.ocultar = false;
      this.ocultar2 = true;
      this.data.push(e);
    }
    });
  }
  validarTecla(evento : any){
    if(evento.keyCode == 13){
      this.Filtrar();
    }
  }
}
