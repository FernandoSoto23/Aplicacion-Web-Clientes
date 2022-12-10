import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse,HttpParams,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioPedidoService {
  Ruta = "https://localhost:44320/api/";

  constructor(private Http : HttpClient) { }

  Grabar(Entidad : any) {
    let Controller = `Pedido/${Entidad}`;
    
    let Headers = new HttpHeaders().set( "Accept", "application/json" );
      return this.Http.post( this.Ruta + Controller,Entidad,
        {
          headers : Headers,
          responseType : 'json'
        }
      )  
     
    }

}
