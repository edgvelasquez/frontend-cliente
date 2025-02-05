import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClientesLinqComponent } from './lista-clientes-linq.component';

describe('ListaClientesLinqComponent', () => {
  let component: ListaClientesLinqComponent;
  let fixture: ComponentFixture<ListaClientesLinqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaClientesLinqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaClientesLinqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
