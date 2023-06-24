import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { RtlService } from '../../../shared/services/rtl.service';
import { Router } from '@angular/router';
import {
  Card,
  MockApiService,
  Transaction,
} from '../../../shared/mock-datas/mock-api.service';
import { SharedService } from '../../../shared/services/shared.service';
import { Animations } from '../../../shared/utils';
import { ModalController } from '@ionic/angular';
import { AddCardModalComponent } from './add-card-modal/add-card-modal.component';
import {getWindow, isDesktop} from "../../../shared/utils/window.util";
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [Animations.fadeInOut300],
})
export class HomeComponent implements OnInit {
  @ViewChild('slides') private slides: any;
  public segmentValue = 'account';
  public isDesktop = isDesktop;
  public accountCardsOptions: any = {
    draggable: true,
    slidesPerView: 1.15,
    spaceBetween: 0,
    centeredSlides: true,
    simulateTouch: true,
    slideToClickedSlide: true,
    observer: true,
  };
  public myCards: Card[] = [];
  public recentTransactions: Transaction[] = [];

  constructor(
    public rtlService: RtlService,
    private router: Router,
    private changeDetection: ChangeDetectorRef,
    private mockApi: MockApiService,
    private modalController: ModalController,
    public sharedService: SharedService
  ) {}

  async ngOnInit() {
    this.mockApi.getCards().subscribe(res => {
      this.myCards = res as Card[];
      this.myCards.push({
        balance: 0,
        cardNumber: '',
        add: true,
      });
    });
    this.mockApi.getTransactions('all', true).subscribe(res => {
      this.recentTransactions = res;
    });
  }

  public greetingText() {
    const today = new Date();
    const curHr = today.getHours();

    if (curHr < 12) {
      return 'goodMorning';
    } else if (curHr < 18) {
      return 'goodAfternoon';
    } else {
      return 'goodEvening';
    }
  }

  public goToSettings() {
    this.router.navigate(['', 'home', 'settings']);
  }

  public goToStats() {
    this.router.navigate(['', 'home', 'stats']);
  }

  public goToTransactions() {
    this.router.navigate(['', 'home', 'transactions']);
  }

  public async addCard() {
    const modal = await this.modalController.create({
      id: 'addCardModal',
      mode: 'ios',
      component: AddCardModalComponent,
      backdropDismiss: false,
      presentingElement: getWindow()?.document.getElementById(
        'tabs'
      ) as HTMLElement,
    });
    await modal.present();
  }

  public getCardBankInfo(CardNumber: string): any {
    switch (CardNumber.substr(0, 6)) {
      case '627412':
        return {
          english: 'eghtesadNovin',
          farsi: 'اقتصاد نوین',
        };
      case '505785':
        return {
          english: 'iranZamin',
          farsi: 'ایران زمین',
        };
      case '636795':
        return {
          english: 'markazi',
          farsi: 'مرکزی',
        };
      case '599999':
        return {
          english: 'markazi',
          farsi: 'مرکزی',
        };
      case '622106':
        return {
          english: 'parsian',
          farsi: 'پارسیان',
        };
      case '502229':
        return {
          english: 'pasargad',
          farsi: 'پاسارگاد',
        };
      case '639347':
        return {
          english: 'pasargad',
          farsi: 'پاسارگاد',
        };
      case '627760':
        return {
          english: 'postBank',
          farsi: 'پست بانک',
        };
      case '636214':
        return {
          english: 'ayande',
          farsi: 'آینده',
        };
      case '186214':
        return {
          english: 'ayande',
          farsi: 'آینده',
        };
      case '627353':
        return {
          english: 'tejarat',
          farsi: 'تجارت',
        };
      case '585983':
        return {
          english: 'tejarat',
          farsi: 'تجارت',
        };
      case '502908':
        return {
          english: 'taavon',
          farsi: 'توسعه تعاون',
        };
      case '627648':
        return {
          english: 'toseSaderat',
          farsi: 'توسعه صادرات',
        };
      case '589210':
        return {
          english: 'sepah',
          farsi: 'سپه',
        };
      case '604932':
        return {
          english: 'sepah',
          farsi: 'سپه',
        };
      case '505801':
        return {
          english: 'sepah',
          farsi: 'سپه',
        };
      case '639370':
        return {
          english: 'sepah',
          farsi: 'سپه',
        };
      case '636949':
        return {
          english: 'sepah',
          farsi: 'سپه',
        };
      case '639599':
        return {
          english: 'sepah',
          farsi: 'سپه',
        };
      case '627381':
        return {
          english: 'sepah',
          farsi: 'سپه',
        };
      case '585947':
        return {
          english: 'khavaremianeh',
          farsi: 'خاورمیانه',
        };
      case '505809':
        return {
          english: 'khavaremianeh',
          farsi: 'خاورمیانه',
        };
      case '502938':
        return {
          english: 'dey',
          farsi: 'دی',
        };
      case '589463':
        return {
          english: 'refah',
          farsi: 'رفاه',
        };
      case '504172':
        return {
          english: 'resalat',
          farsi: 'رسالت',
        };
      case '621986':
        return {
          english: 'saman',
          farsi: 'سامان',
        };
      case '639607':
        return {
          english: 'sarmaye',
          farsi: 'سرمایه',
        };
      case '639346':
        return {
          english: 'sina',
          farsi: 'سینا',
        };
      case '502806':
        return {
          english: 'shahr',
          farsi: 'شهر',
        };
      case '504706':
        return {
          english: 'shahr',
          farsi: 'شهر',
        };
      case '603769':
        return {
          english: 'saderat',
          farsi: 'صادرات',
        };
      case '627961':
        return {
          english: 'sanat',
          farsi: 'صنعت و معدن',
        };
      case '606373':
        return {
          english: 'mehrIran',
          farsi: 'مهر ایران',
        };
      case '627488':
        return {
          english: 'karAfarin',
          farsi: 'کارآفرین',
        };
      case '603770':
        return {
          english: 'keshavarzi',
          farsi: 'کشاورزی',
        };
      case '639217':
        return {
          english: 'keshavarzi',
          farsi: 'کشاورزی',
        };
      case '505416':
        return {
          english: 'gardeshgari',
          farsi: 'گردشگری',
        };
      case '628023':
        return {
          english: 'maskan',
          farsi: 'مسکن',
        };
      case '610433':
        return {
          english: 'melat',
          farsi: 'ملت',
        };
      case '603799':
        return {
          english: 'meli',
          farsi: 'ملی',
        };
      case '628157':
        return {
          english: 'moaseseTosee',
          farsi: 'موسسه اعتباری توسعه',
        };
      case '606256':
        return {
          english: 'moaseseMellal',
          farsi: 'موسسه اعتباری ملل',
        };
      case '507677':
        return {
          english: 'nor',
          farsi: 'موسسه اعتباری نور',
        };
      case '581874':
        return {
          english: 'iranVenezuela',
          farsi: 'ایران و ونزويلا',
        };
      default:
        return {
          english: '--',
          farsi: '--',
        };
    }
  }

  public getShebaBankInfo(ShebaNumber: string): any {
    switch (ShebaNumber.substr(3, 2)) {
      case '55':
        return {
          english: 'eghtesadNovin',
          farsi: 'اقتصاد نوین',
        };
      case '63':
        return {
          english: 'ansar',
          farsi: 'انصار',
        };
      case '69':
        return {
          english: 'iranZamin',
          farsi: 'ایران زمین',
        };
      case '10':
        return {
          english: 'markazi',
          farsi: 'مرکزی جمهوری اسلامی',
        };
      case '54':
        return {
          english: 'parsian',
          farsi: 'پارسیان',
        };
      case '57':
        return {
          english: 'pasargad',
          farsi: 'پاسارگاد',
        };
      case '21':
        return {
          english: 'postBank',
          farsi: 'پست بانک',
        };
      case '62':
        return {
          english: 'ayande',
          farsi: 'آینده',
        };
      case '18':
        return {
          english: 'tejarat',
          farsi: 'تجارت',
        };
      case '22':
        return {
          english: 'taavon',
          farsi: 'توسعه تعاون',
        };
      case '20':
        return {
          english: 'toseSaderat',
          farsi: 'توسعه صادرات',
        };
      case '65':
        return {
          english: 'sepah',
          farsi: 'سپه',
        };
      case '15':
        return {
          english: 'sepah',
          farsi: 'سپه',
        };
      case '52':
        return {
          english: 'sepah',
          farsi: 'سپه',
        };
      case '73':
        return {
          english: 'sepah',
          farsi: 'سپه',
        };
      case '79':
        return {
          english: 'sepah',
          farsi: 'سپه',
        };
      case '78':
        return {
          english: 'khavaremianeh',
          farsi: 'خاورمیانه',
        };
      case '66':
        return {
          english: 'dey',
          farsi: 'دی',
        };
      case '13':
        return {
          english: 'refah',
          farsi: 'رفاه',
        };
      case '70':
        return {
          english: 'resalat',
          farsi: 'رسالت',
        };
      case '56':
        return {
          english: 'saman',
          farsi: 'سامان',
        };
      case '58':
        return {
          english: 'sarmaye',
          farsi: 'سرمایه',
        };
      case '59':
        return {
          english: 'sina',
          farsi: 'سینا',
        };
      case '61':
        return {
          english: 'shahr',
          farsi: 'شهر',
        };
      case '19':
        return {
          english: 'saderat',
          farsi: 'صادرات',
        };
      case '11':
        return {
          english: 'sanat',
          farsi: 'صنعت و معدن',
        };
      case '60':
        return {
          english: 'mehrIran',
          farsi: 'مهر ایران',
        };
      case '53':
        return {
          english: 'karAfarin',
          farsi: 'کارآفرین',
        };
      case '16':
        return {
          english: 'keshavarzi',
          farsi: 'کشاورزی',
        };
      case '64':
        return {
          english: 'gardeshgari',
          farsi: 'گردشگری',
        };
      case '14':
        return {
          english: 'maskan',
          farsi: 'مسکن',
        };
      case '12':
        return {
          english: 'melat',
          farsi: 'ملت',
        };
      case '17':
        return {
          english: 'meli',
          farsi: 'ملی',
        };
      case '51':
        return {
          english: 'moaseseTosee',
          farsi: 'موسسه اعتباری توسعه',
        };
      case '75':
        return {
          english: 'moaseseMellal',
          farsi: 'موسسه اعتباری ملل',
        };
      case '80':
        return {
          english: 'nor',
          farsi: 'موسسه اعتباری نور',
        };
      case '95':
        return {
          english: 'iranVenezuela',
          farsi: 'ایران و ونزويلا',
        };
      default:
        return {
          english: 'default',
          farsi: 'شبا',
        };
    }
  }
}
