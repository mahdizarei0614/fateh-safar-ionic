import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../mock-datas/mock-api.service';

@Pipe({
  name: 'filterTransactions',
  pure: false,
  standalone: true,
})
export class FilterTransactionsPipe implements PipeTransform {
  transform(value: Transaction[], ...args: any[]): Transaction[] {
    return value.filter(i => args[1][i.category].includes(args[0]));
  }
}
