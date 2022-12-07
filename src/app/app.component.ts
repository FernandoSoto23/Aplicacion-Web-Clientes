import { Component } from '@angular/core';
import { ServicioClienteService } from './Services/servicio-cliente.service';
import { ServicioListaClienteService } from './Services/servicio-lista-cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ServicioClienteService,ServicioListaClienteService]
})
export class AppComponent {
  title = 'appAngular';
}
