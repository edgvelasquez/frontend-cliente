import { Component } from '@angular/core';
import {ClienteService} from '../../services/cliente.service';
import {FormatearTelefonoPipe} from '../../pipes/formatearTelefonoPipe';

@Component({
  selector: 'app-lista-clientes-sp',
  imports: [
    FormatearTelefonoPipe
  ],
  templateUrl: './lista-clientes-sp.component.html',
  styleUrl: './lista-clientes-sp.component.css'
})
export class ListaClientesSPComponent {
  clientes:any=[];
  constructor(private clienteService: ClienteService) {
  }
  ngOnInit() {
    this.clienteService.getClientesSP().subscribe({
      next: (clientes:any)=>{
        this.clientes = clientes;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
