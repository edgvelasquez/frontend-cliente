import { Routes } from '@angular/router';
import {InicioClientesComponent} from './components/inicio-clientes/inicio-clientes.component';
import {ListaClientesSPComponent} from './components/lista-clientes-sp/lista-clientes-sp.component';
import {ListaClientesLinqComponent} from './components/lista-clientes-linq/lista-clientes-linq.component';
import {NotFound404Component} from './components/page/not-found404/not-found404.component';

export const routes: Routes = [
  {path:"",redirectTo:"inicio",pathMatch:"full"},
  {path:"inicio",component:InicioClientesComponent},
  {path:"clientesSP",component:ListaClientesSPComponent},
  {path:"clientesLinq",component:ListaClientesLinqComponent},
  {path:"**",component:NotFound404Component}
];
