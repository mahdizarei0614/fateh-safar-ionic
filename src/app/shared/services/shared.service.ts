import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  getTransactionCategoryIcon(key: string): string {
    const routeToIcons = 'assets/images/transaction-category/';
    switch (key) {
      case 'onlineShopping':
        return routeToIcons.concat('online-shopping.svg');
      case 'pos':
        return routeToIcons.concat('pos.svg');
      case 'cardToCard':
        return routeToIcons.concat('card-to-card.svg');
      case 'gift':
        return routeToIcons.concat('gift.svg');
      case 'car':
        return routeToIcons.concat('car.svg');
      case 'home':
        return routeToIcons.concat('home.png');
      case 'health':
        return routeToIcons.concat('health.svg');
      case 'food':
        return routeToIcons.concat('food.svg');
      case 'education':
        return routeToIcons.concat('education.svg');
      case 'clothing':
        return routeToIcons.concat('clothing.svg');
      default:
        return '';
    }
  }

  toPersian(str: string) {
    return str
      .toLowerCase()
      .replace('farvardin', 'فروردین')
      .replace('ordibehesht', 'اردیبهشت')
      .replace('khordaad', 'خرداد')
      .replace('tir', 'تیر')
      .replace('mordaad', 'مرداد')
      .replace('shahrivar', 'شهریور')
      .replace('mehr', 'مهر')
      .replace('aabaan', 'آبان')
      .replace('aazar', 'آذر')
      .replace('dey', 'دی')
      .replace('bahman', 'بهمن')
      .replace('esfand', 'اسفند')
      .replace('in a few seconds', 'همین حالا')
      .replace('a few seconds ago', 'چند ثانیه پیش')
      .replace('minutes', 'دقیقه')
      .replace('minute', 'دقیقه')
      .replace('hours', 'ساعت')
      .replace('hour', 'ساعت')
      .replace('ago', 'قبل')
      .replace('an', 'یک')
      .replace('a', 'یک');
  }
}
