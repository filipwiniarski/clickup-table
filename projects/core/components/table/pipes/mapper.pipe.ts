import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapper',
})
export class MapperPipe implements PipeTransform {
  transform<T, G>(
    value: T,
    mapper: (item: T, ...args: any[]) => G,
    ...args: any[]
  ): G {
    return mapper(value, ...args);
  }
}
