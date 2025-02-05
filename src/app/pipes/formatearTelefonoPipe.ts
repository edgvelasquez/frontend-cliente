import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:"formatearTelefono"
})
export class FormatearTelefonoPipe implements PipeTransform {
  transform(value:string):string{
    if (!value) return value;
    return value.replace(/(.{4})(?=.)/g, '$1 ');
  }
}
