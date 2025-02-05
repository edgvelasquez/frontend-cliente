import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClientesSPComponent } from './lista-clientes-sp.component';

describe('ListaClientesSPComponent', () => {
  let component: ListaClientesSPComponent;
  let fixture: ComponentFixture<ListaClientesSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaClientesSPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaClientesSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
