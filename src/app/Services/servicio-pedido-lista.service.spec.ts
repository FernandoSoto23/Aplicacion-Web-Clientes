import { TestBed } from '@angular/core/testing';

import { ServicioPedidoListaService } from './servicio-pedido-lista.service';

describe('ServicioPedidoListaService', () => {
  let service: ServicioPedidoListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPedidoListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
