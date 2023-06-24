import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'chatTimeBadge',
  standalone: true,
})
export class ChatTimeBadgePipe implements PipeTransform {
  transform(value: string | Date | number): unknown {
    return moment(value).format('jYYYY/jMM/jDD');
  }
}
