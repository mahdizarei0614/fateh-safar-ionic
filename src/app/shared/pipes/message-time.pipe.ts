import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'messageTime',
  pure: false,
  standalone: true,
})
export class MessageTimePipe implements PipeTransform {
  transform(value: number | string | Date | undefined): unknown {
    return moment(value).format('HH:mm');
  }
}
