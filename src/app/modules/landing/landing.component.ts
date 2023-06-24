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
  ];
  steps = [
    'مطالعه شرایط و قوانین مسترکارت',
    'ثبت‌نام',
    'احراز هویت',
    'تکمیل اطلاعات و ارسال عکس صفحه اول پاسپورت',
    'انتخاب کارت و پرداخت هزینه',
    'احراز هویت حضوری و دریافت کارت در ترکیه',
    'افزودن کارت در داشبورد',
  ];


  faqs:IFaq[] = [
    {
      question: 'آیا نام درخواست دهنده روی مسترکارت مسافرتی درج می شود؟',
      answer: 'بله هر مسترکارت مسافرتی با نام مالک اصلی آن صادر می شود.'
    },
    {
      question: 'امکان شارژ حساب مسترکارت مسافرتی از ایران وجود دارد؟',
      answer: 'بله کاربران می توانند با مراجعه به داشبورد خود در او ام پی فینکس با پرداخت ریال، مسترکارت خود را در لحظه شارژ کنند.'
    },
    {
      question: 'آیا نیاز به احراز هویت فیزیکی برای مسترکارت مسافرتی وجود دارد؟',
      answer: 'خیر، تمام مراحل احراز هویت به صورت آنلاین در سایت او ام پی فینکس انجام می شود. فقط برای دریافت مسترکارت مسافرتی نیاز به حضور در دفتر ترکیه خواهید داشت.'
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

export interface IFaq {
  question: string,
  answer: string
}
