import {Component, OnInit} from '@angular/core';
import {ClienteService} from '../../services/cliente.service';
import {FormatearTelefonoPipe} from '../../pipes/formatearTelefonoPipe';


@Component({
  selector: 'app-lista-clientes-linq',
  imports: [
    FormatearTelefonoPipe
  ],
  templateUrl: './lista-clientes-linq.component.html',
  styleUrl: './lista-clientes-linq.component.css'
})
export class ListaClientesLinqComponent implements OnInit {
    clientes:any=[];
    constructor(private clienteService: ClienteService) {
    }
    ngOnInit() {
      this.clienteService.getClientesLinq().subscribe({
        next: (clientes:any)=>{
          this.clientes = clientes;
        },
        error: err => {
          console.log(err);
        }
      })
    }
}
