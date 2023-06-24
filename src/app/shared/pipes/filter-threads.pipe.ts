import { Pipe, PipeTransform } from '@angular/core';
import { Room } from 'matrix-js-sdk';

@Pipe({
  name: 'filterThreads',
  standalone: true,
})
export class FilterThreadsPipe implements PipeTransform {
  transform(value: Room[], ...args: string[]): Room[] {
    if (args[0]?.length) {
      value = value.filter(i => i.name.includes(args[0]));
    }
    switch (args[1]) {
      case 'all':
        return value;
      case 'p2p':
        return value.filter(i => i.getMembers().length === 2);
      case 'groups':
        return value.filter(i => i.getMembers().length > 2);
      case 'channels':
        return value;
      case 'bots':
        return value;
      default:
        return value;
    }
  }
}
