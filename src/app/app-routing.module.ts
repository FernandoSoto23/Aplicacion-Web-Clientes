import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';

const routes: Routes = [
  {path:"Cliente",component:ClienteComponent},
  {path:"ListaCliente",component:ListaClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
