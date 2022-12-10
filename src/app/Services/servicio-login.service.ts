import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse,HttpParams,HttpHeaders} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  //https://localhost:44320/login/loguear?email=fernandosoto23@hotmail.com&pwd=123
  Ruta = "https://localhost:44320/api/";
  constructor(private Http : HttpClient) { }

  public Consultar(user : any,pwd : any){
    //variable para conectar el controllador
    let Controller = `login`;
  

    //Asiganamos los parametros
    let Params = new HttpParams().set( 'user', user ).set('pwd',pwd);
   

    let Headers = new HttpHeaders().set("Accept","applicacion/json")
    /* console.log(this.Ruta + Controller + Params); */
    return this.Http.get(this.Ruta + Controller,{
      headers : Headers,
      params: Params,
      responseType : "json"
    });
  }
  Registrar(Entidad : any){
      let Controller = `login/${Entidad}`;
      
      let Headers = new HttpHeaders().set( "Accept", "application/json" );
        return this.Http.post( this.Ruta + Controller,Entidad,
          {
            headers : Headers,
            responseType : 'json'
          }
        )  
       
      
  }
}
