import {FormatearTelefonoPipe} from './formatearTelefonoPipe';

describe('formatearTelefonoPipe', () => {
  let pipe: FormatearTelefonoPipe;

  beforeEach(() => {
    pipe = new FormatearTelefonoPipe();
  });

  it('Debe formatear correctamente un número de teléfono', () => {
    expect(pipe.transform('+56912345678')).toBe('+569 1234 5678');
  });

});
