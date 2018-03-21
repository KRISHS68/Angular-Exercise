import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positive'
})
export class PositivePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const newVal = value > 0 ? ('+' + value) : value;
    return newVal;
  }
}
