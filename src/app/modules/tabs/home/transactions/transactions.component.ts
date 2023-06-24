import { Component } from '@angular/core';
import {
  MockApiService,
  Transaction,
} from '../../../../shared/mock-datas/mock-api.service';
import { RtlService } from '../../../../shared/services/rtl.service';
import { Router } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';
import { Animations } from '../../../../shared/utils';
import { TranslateService } from '@ngx-translate/core';
import {isDesktop} from "../../../../shared/utils/window.util";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  animations: [Animations.fadeInOut300],
})
export class TransactionsComponent {
  public segmentValue = 'all';
  public searchValue = '';
  public isDesktop = isDesktop;
  public transactionsList: Transaction[] = [];
  public categories: Transaction[] = [];

  constructor(
    public rtlService: RtlService,
    private router: Router,
    private mockApi: MockApiService,
    private translateService: TranslateService,
    public sharedService: SharedService
  ) {
    this.translateService.get('homePage.lists.categories').subscribe(res => {
      this.categories = res;
    });
  }

  async ngOnInit() {
    this.transactionsList = [];
    this.mockApi.getTransactions(this.segmentValue).subscribe(res => {
      this.transactionsList = res;
    });
  }

  searchTransactions(event: any) {
    this.searchValue = event.detail.value;
  }

  changeCategory(event: any) {
    this.segmentValue = event.detail.value;
    this.ngOnInit();
  }
}
