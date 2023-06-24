import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ThreadTimePipe } from '../../../../shared/pipes/thread-time.pipe';
import { FilterTransactionsPipe } from '../../../../shared/pipes/filter-transactions.pipe';
import { HighlightTextPipe } from '../../../../shared/pipes/highlight-text.pipe';

@NgModule({
  declarations: [TransactionsComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    IonicModule,
    TranslateModule,
    ThreadTimePipe,
    FilterTransactionsPipe,
    HighlightTextPipe,
  ],
})
export class TransactionsModule {}
