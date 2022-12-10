import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { ListaClienteComponent } from './components/lista-cliente/lista-cliente.component';
import { ListaPedidoComponent } from './components/lista-pedido/lista-pedido.component';
import { LoginComponent } from './components/login/login.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

const routes: Routes = [
  {path:'',redirectTo : 'Home', pathMatch:'full'},
  {path:"Home",component:HomeComponent},
  {path:"Cliente",component:ClienteComponent},
  {path:"ListaCliente",component:ListaClienteComponent},
  {path:"Pedidos",component:PedidosComponent},
  {path:"ListaPedidos",component:ListaPedidoComponent},
  {path:"Login",component:LoginComponent},
  {path:"**",component:ErrorComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
