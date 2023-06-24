import { Pipe, PipeTransform } from '@angular/core';
import { Room } from 'matrix-js-sdk';

@Pipe({
  name: 'sortByTimeField',
  pure: false,
  standalone: true,
})
export class SortByTimeFieldPipe implements PipeTransform {
  transform(value: Room[], ...args: string[]): Room[] {
    switch (args[0]) {
      case 'threads':
        return value
          .filter(
            (i: Room) =>
              i.getMyMembership() !== 'invite' &&
              i.getMyMembership() !== 'leave'
          )
          .sort(
            (a: Room, b: Room) =>
              b.getLastActiveTimestamp() - a.getLastActiveTimestamp()
          );
      default:
        return value;
    }
  }
}
