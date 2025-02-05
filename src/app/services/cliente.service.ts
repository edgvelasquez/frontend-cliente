import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient:HttpClient) { }
  getClientesSP() {
    return this.httpClient.get<any>(environment.url+"/cliente/getClientesSP",{
    });
  }
  getClientesLinq() {
    return this.httpClient.get<any>(environment.url+"/cliente/getClientesLinq",{
    });
  }
}
