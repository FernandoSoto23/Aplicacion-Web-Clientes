import { Component, OnInit } from '@angular/core';
import { FormsModule,NgModel} from '@angular/forms'
import { EMPTY } from 'rxjs';
import Swal from 'sweetalert2'
import { ServicioClienteService } from '../../Services/servicio-cliente.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  Boolean:any;
  Boolean2:any;
  Id:any;
  Nombre:any;
  Direccion:any;
  RFC: any;
  Correo:any;
  Tel:any;

  Entidad:any;
  constructor(private ServicioCliente : ServicioClienteService, 
              private router:Router,
              private  route : ActivatedRoute) 
  {
    this.Boolean = true;
  }

  ngOnInit(): void {
  }
  validarTecla(evento : any){
    if(evento.keyCode == 13){
      this.Mostrar();
    }
  }
  Mostrar(){
    if(this.Id !=null && this.Id > -1){
      this.Boolean = false
      this.Boolean2 = true;
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Alerta!...',
        text: 'Ingrese un ID correcto por favor!',
      })
      this.Id = null;
      this.Boolean = true;
    }
      this.ServicioCliente.Consultar(this.Id).subscribe((data)=>{
        this.Entidad = data;
        this.Nombre = this.Entidad.Nombre;
        this.Direccion = this.Entidad.Direccion;
        this.RFC = this.Entidad.RFC;
        this.Correo = this.Entidad.Correo;
        this.Tel = this.Entidad.Telefono;
      })
  }
  Guardar(){

    this.Filtrar();
    this.ServicioCliente.Grabar(this.Entidad).subscribe();

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Los datos se actualizaron correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }
  Eliminar(){
    Swal.fire({
      title: 'Esta seguro de Eliminar estos datos?',
      text: "Estos cambios no se pueden revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borralos!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ServicioCliente.EliminarCliente(this.Id).subscribe();
        Swal.fire(
          'Eliminados!',
          'Los Datos han sido Eliminados.',
          'success'
        )
        this.Limpiar();
      }
    })
  }
  Limpiar(){
    this.Boolean = true;
    this.Boolean2 = false;
    this.Id = "";
    this.Nombre = "";
    this.Direccion = "";
    this.RFC = "";
    this.Correo = "";
    this.Tel = "";
  }
  Filtrar(){
    this.Entidad = {"id" : this.Id,"nombre" : this.Nombre,"direccion" : this.Direccion,"rfc" : this.RFC,"correo" : this.Correo, "telefono" : this.Tel}
  }
  Boton(evento : any){
    console.log(evento.Escape);
  }
}
