import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse,HttpParams,HttpHeaders} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ServicioListaClienteService {
  Ruta ="https://localhost:44320/api/";
  constructor( private Http : HttpClient) { }

  public Consultar(){
    //variable para conectar el controllador
    let Controller = `cliente/`;
    let Params = new HttpParams();

    //Asiganamos los parametros
    let Headers = new HttpHeaders().set("Accept","applicacion/json")
    return this.Http.get(this.Ruta + Controller,{
      headers : Headers,
      params: Params,
      responseType : "json"
    });
  }
}
