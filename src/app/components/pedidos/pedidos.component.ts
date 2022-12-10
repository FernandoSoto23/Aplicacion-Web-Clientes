import { Component, OnInit } from '@angular/core';
import { ServicioPedidoService } from 'src/app/Services/servicio-pedido.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  IdCliente : any;
  NombrePedido : any;
  ObsPedido : any;
  Boolean : Boolean;
  Boolean2 : Boolean;
  Entidad : any;
  constructor( private servicioPedido : ServicioPedidoService) {
    this.Boolean = true;
    this.Boolean2 = false;
   }

  ngOnInit(): void {
  }
  validarTecla(event : any){
    if(event.keyCode == 13){
      this.Guardar();
    }
  }

  Guardar(){
    Swal.fire({
      title: 'Dar de alta este pedido?',
      text: "Añadir un nuevo pedido?!",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Añadelo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Filtrar();
        this.servicioPedido.Grabar(this.Entidad).subscribe();
        Swal.fire(
          'El Pedido se Registro correctamente!',
          'El pedido ha sido Añadido a la Base de Datos.',
          'success'
        )
        this.Vaciar();
        
      }
    })
    

  }
  Filtrar(){
    this.Entidad = {"idCliente" : this.IdCliente,"nombrePedido" : this.NombrePedido, "Observaciones" : this.ObsPedido}
  }
  Vaciar(){
    this.IdCliente = "";
    this.NombrePedido ="";
    this.ObsPedido = "";
  }
}
