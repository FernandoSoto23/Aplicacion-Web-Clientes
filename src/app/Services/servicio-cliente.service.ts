import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse,HttpParams,HttpHeaders} from "@angular/common/http";
import { toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioClienteService {
  Ruta ="https://localhost:44320/api/";
  constructor(
    private Http : HttpClient
  ) { }

  //consultar por id
  public Consultar(id : any){
    //variable para conectar el controllador
    let Controller = `cliente/${id}`;
    let Params = new HttpParams();

    //Asiganamos los parametros
    Params.set('id' , id);
    let Headers = new HttpHeaders().set("Accept","applicacion/json")
    console.log(id);
    return this.Http.get(this.Ruta + Controller,{
      headers : Headers,
      params: Params,
      responseType : "json"
    });
  }
//actualizar en la base de datos
  Grabar(Entidad : any) {
    let Controller = `Cliente/${Entidad}`;
    
    let Headers = new HttpHeaders().set( "Accept", "application/json" );
      return this.Http.post( this.Ruta + Controller,Entidad,
        {
          headers : Headers,
          responseType : 'json'
        }
      )  
     
    }

    //Borrar
    EliminarCliente(id : any) {
      let Controller = `Cliente/${id}`;
      
      let Headers = new HttpHeaders().set( "Accept", "application/json" );
        return this.Http.delete( this.Ruta + Controller,
          {
            headers : Headers,
            responseType : 'json'
          }
        )  
       
      }
}
