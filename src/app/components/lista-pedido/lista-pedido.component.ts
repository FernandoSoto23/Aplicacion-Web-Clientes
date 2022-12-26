import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ServicioPedidoListaService } from 'src/app/Services/servicio-pedido-lista.service';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.css']
})
export class ListaPedidoComponent implements OnInit {

  //variables
  Boolean:any;
  Boolean2:any;
  ocultar : Boolean;
  ocultar2 : Boolean;
  //variables que conforman la tabla
  IdPedido:any;
  IdCliente : any;
  NombreCliente : any;
  NombrePedido : any;
  Observaciones : any;
  Precio : any;

  Entidad: any;

  filtro:any;
  
  constructor(private servicioListaPedido : ServicioPedidoListaService) {
    this.Mostrar();
    this.ocultar = true;
    this.ocultar2 = false;
   }

  ngOnInit(): void {
  }
    async Mostrar(){
      await this.servicioListaPedido.Consultar().subscribe((data)=>{
        this.Entidad = data;
        this.IdPedido = this.Entidad.IdPedido;
        this.IdCliente = this.Entidad.IdCliente;
        this.NombreCliente = this.Entidad.NombreCliente;
        this.NombrePedido = this.Entidad.NombrePedido;
        this.Observaciones = this.Entidad.Observaciones;
        this.Precio = this.Entidad.Precio;
      })
    }
    data :any = [];
    Filtrar(){
      console.log(this.Entidad);
      this.data = [];
      this.Entidad.forEach((e:any=[],index : number) => { 
      if(e.NombreCliente.match(this.filtro)){
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

