import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calc'
})
export class CalcPipe implements PipeTransform {

  transform(value: number, cost: number = 50): unknown {
    return (value * cost).toFixed(2) + "$";
  }

}
