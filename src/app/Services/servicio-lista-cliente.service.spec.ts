import { TestBed } from '@angular/core/testing';

import { ServicioListaClienteService } from './servicio-lista-cliente.service';

describe('ServicioListaClienteService', () => {
  let service: ServicioListaClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioListaClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
