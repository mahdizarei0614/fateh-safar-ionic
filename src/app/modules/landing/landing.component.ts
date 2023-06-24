import {Component} from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-root',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  swiperModules = [IonicSlides];
  swiperOptions: SwiperOptions = {
    loop: true,
    spaceBetween: 24,
    slidesPerView: "auto",

  };
  features: Feature[] = [
    {
      iconSrc: 'cart.json',
      label: 'خرید از پایانه‌های فروشگاهی',
      description: 'با مسترکارت مسافرتی امکان خرید از تمام پایانه‌های فروشگاهی را در سفر خود به ترکیه یا سایر کشورها خواهید داشت. این کارت‌ها قابلیت پرداخت مگنتی، بدون تماس و با استفاده از چیپ را دارا هستند.'
    },
    {
      iconSrc: 'payment.json',
      label: 'درگاه پرداخت بین‌المللی',
      description: ' شما می‌توانید برای تکمیل پرداخت‌های آنلاین بین‌المللی از مسترکارت مسافرتی اختصاصی خود استفاده کنید. برای مثال، خرید آنلاین از فروشگاه‌ها، پرداخت هزینه‌ آزمون‌های زبان خارجی و سایر موارد با استفاده از مسترکارت مسافرتی امکان‌پذیر خواهد بود.'
    },
    {
      iconSrc: 'wallet.json',
      label: 'برداشت وجه از دستگاه‌های خودپرداز',
      description: 'با وجود مسترکارت مسافرتی، دیگر نیازی به حمل وجه نقد در سفرهای خارجی خود نخواهید داشت. شما می‌توانید به راحتی با استفاده از مسترکارت مسافرتی و مراجعه به دستگاه‌های خودپرداز، به وجه نقد مورد نیاز خود در سفر دسترسی داشته باشید.'
    }
  ];
  cards: Card[] = [
    {
      vip: true,
      cardImgSrc: 'vip.png',
      label: 'مستر کارت VIP',
      toman: 21129339,
      dollar: 420,
      features: ['خریدهای آنلاین بین‌المللی'],
      maxMonthlyTransactions: 100000,
      buttonStyle: "solid"
    },
    {
      cardImgSrc: 'black.png',
      label: 'مسترکارت پلاتینیوم',
      toman: 6540034,
      dollar: 130,
      features: ['خریدهای آنلاین بین‌المللی'],
      maxMonthlyTransactions: 10000,
      buttonStyle: "outline"
    },
    {
      cardImgSrc: 'gold.png',
      label: 'مسترکارت گلد',
      features: ['خریدهای آنلاین بین‌المللی'],
      maxMonthlyTransactions: 1000,
      comingSoon: true
    },
    {
      cardImgSrc: 'classic.png',
      label: 'مسترکارت کلاسیک',
      features: ['خریدهای آنلاین بین‌المللی'],
      maxMonthlyTransactions: 200,
      comingSoon: true
    }
  ]
  constructor() {
  }
}

export type Feature =  {
  iconSrc: string,
  label: string,
  description: string
}

export type Card =  {
  vip?: boolean,
  cardImgSrc: string,
  label: string,
  toman?: number,
  dollar?: number,
  features: string[],
  maxMonthlyTransactions: number,
  comingSoon?: boolean,
  buttonStyle?: 'solid' | 'outline'
}
