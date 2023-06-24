import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor(private httpClient: HttpClient) {
  }

  public getCards(): Observable<Card[]> {
    return new Observable<Card[]>((observer) => {
      setTimeout(async () => {
        const cards: Card[] = [];
        observer.next(cards);
      }, 2000);
    })
  }

  public getTransactions(type = 'all', short = false): Observable<Transaction[]> {
    return new Observable<Transaction[]>((observer) => {
      setTimeout(async () => {
        const transactions = [
          {
            category: 'onlineShopping',
            time: '2023-02-15T20:34:00',
            amount: 14500000,
            type: 'out'
          },
          {
            category: 'gift',
            time: '2022-07-15T20:34:00',
            amount: 10000000,
            type: 'in'
          },
          {
            category: 'cardToCard',
            time: '2021-02-15T20:34:00',
            amount: 6000000,
            type: 'out'
          },
          {
            category: 'pos',
            time: '2021-02-15T20:34:00',
            amount: 6000000,
            type: 'out'
          },
          {
            category: 'car',
            time: '2021-02-15T20:34:00',
            amount: 1200000,
            type: 'out'
          },
          {
            category: 'health',
            time: '2021-02-15T20:34:00',
            amount: 543000,
            type: 'out'
          },
          {
            category: 'pos',
            time: '2021-02-15T20:34:00',
            amount: 690000,
            type: 'out'
          },
          {
            category: 'home',
            time: '2021-02-15T20:34:00',
            amount: 500000,
            type: 'out'
          },
          {
            category: 'gift',
            time: '2022-07-15T20:34:00',
            amount: 12000000,
            type: 'in'
          },
          {
            category: 'clothing',
            time: '2021-02-15T20:34:00',
            amount: 2000000,
            type: 'out'
          },
          {
            category: 'food',
            time: '2021-02-15T20:34:00',
            amount: 650000,
            type: 'out'
          },
          {
            category: 'education',
            time: '2021-02-15T20:34:00',
            amount: 700000,
            type: 'out'
          },
          {
            category: 'home',
            time: '2021-02-15T20:34:00',
            amount: 500000,
            type: 'out'
          },
          {
            category: 'gift',
            time: '2022-07-15T20:34:00',
            amount: 12000000,
            type: 'in'
          },
          {
            category: 'clothing',
            time: '2021-02-15T20:34:00',
            amount: 2000000,
            type: 'out'
          },
          {
            category: 'food',
            time: '2021-02-15T20:34:00',
            amount: 650000,
            type: 'out'
          },
          {
            category: 'education',
            time: '2021-02-15T20:34:00',
            amount: 700000,
            type: 'out'
          }
        ];
        if (short) {
          observer.next(transactions.slice(0, 3));
        } else {
          switch (type) {
            case 'all':
              observer.next(transactions);
              return;
            default:
              observer.next(transactions.filter((i) => i.type === type));
              return;
          }
        }
      }, 4000);
    })
  }

  public getBalanceChart(): Observable<any[]> {
    const lineData = [
      {date: "2020/01/01", total: 15000000, min: 12000000, max: 16000000},
      {date: "2020/02/01", total: 14000000, min: 11000000, max: 15000000},
      {date: "2020/03/01", total: 15500000, min: 15000000, max: 18000000},
      {date: "2020/04/01", total: 22000000, min: 18000000, max: 24000000},
      {date: "2020/05/01", total: 700000, min: 700000, max: 24000000},
      {date: "2020/06/01", total: 13500000, min: 700000, max: 13500000},
      {date: "2020/07/01", total: 15000000, min: 13500000, max: 18000000},
      {date: "2020/08/01", total: 22000000, min: 18000000, max: 28000000},
      {date: "2020/09/01", total: 7000000, min: 6000000, max: 17000000},
      {date: "2020/10/01", total: 12000000, min: 10000000, max: 18000000},
      {date: "2020/11/01", total: 4000000, min: 1000000, max: 12000000},
      {date: "2020/12/01", total: 5000000, min: 1000000, max: 8000000},
    ];
    return new Observable<any[]>((observer) => {
      setTimeout(async () => {
        observer.next(lineData);
      }, 3000);
    })
  }
}

export type Card = {
  cardNumber: string,
  balance: number,
  default?: boolean,
  add?: boolean
}

export type Transaction = {
  currency?: string,
  category: string,
  time: string | Date | number,
  type: string,
  amount: number
}
