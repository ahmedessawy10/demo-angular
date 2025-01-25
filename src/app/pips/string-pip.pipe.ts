import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringPip'
})
export class StringPipPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return `hello ${value}`;
  }

}
