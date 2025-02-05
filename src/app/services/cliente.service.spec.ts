import { TestBed } from '@angular/core/testing';

import { ClienteService } from './cliente.service';
import {HttpClient, } from '@angular/common/http';

describe('ClienteService', () => {
  let service: ClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient],
    });
    service = TestBed.inject(ClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getClientesSP debe obtener la lista de los clientes', (done:DoneFn) => {
    service.getClientesSP().subscribe({
      next: (data) => {
        expect(data.length).toBeGreaterThan(0);
        done();
      }
    })
  });
  it('getClientesLinq debe obtener la lista de los clientes', (done:DoneFn) => {
    service.getClientesLinq().subscribe({
      next: (data) => {
        expect(data.length).toBeGreaterThan(0);
        done();
      }
    })
  });

});
