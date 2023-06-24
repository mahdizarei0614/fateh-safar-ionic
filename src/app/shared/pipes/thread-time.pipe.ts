import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from '../services/shared.service';

@Pipe({
  name: 'threadTime',
  pure: false,
  standalone: true,
})
export class ThreadTimePipe implements PipeTransform {
  constructor(
    private translateService: TranslateService,
    private sharedService: SharedService
  ) {}

  transform(value: number | string | Date | undefined): unknown {
    try {
      const time = moment(value);
      const now = moment();
      if (this.translateService.currentLang === 'fa') {
        if (time.jYear() !== now.jYear()) {
          return this.sharedService.toPersian(time.format('jYYYY jMMMM'));
        }
        if (time.jMonth() !== now.jMonth()) {
          return this.sharedService.toPersian(time.format('jMMMM jDD'));
        }
        if (time.jDay() !== now.jDay()) {
          if (Math.abs(time.jDay() - now.jDay()) < 7) {
            return this.sharedService.toPersian(time.format('jMMMM jDD'));
          } else {
            return this.sharedService.toPersian(time.format('jMMMM jDD'));
          }
        }
        if (now.diff(time, 'hours') === 0) {
          return this.sharedService.toPersian(time.fromNow());
        }
      } else {
        if (time.year() !== now.year()) {
          return time.format('YYYY MMM');
        }
        if (time.month() !== now.month()) {
          return time.format('MMMM DD');
        }
        if (time.day() !== now.day()) {
          return time.format('MMM DD');
        }
        if (now.diff(time, 'hours') === 0) {
          return time.fromNow();
        }
      }
      return moment(value).format('HH:mm');
    } catch (e) {
      return '';
    }
  }
}
