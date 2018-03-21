import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  private totalAccounts: number;
  private data: any[];
  constructor() {
    this.data = [{
      id: '5200',
      name: 'IRA - 5200',
      code: 'USD',
      cash: '5763.33',
      todayChange: {
        percent: '-0.08',
        amount: '8916.69'
      }
    },
    {
      id: '8200',
      name: 'ARA - 8200',
      code: 'USD',
      cash: '8763.33',
      todayChange: {
        percent: '-0.20',
        amount: '18916.69'
      }
    },
    {
      id: '1812',
      name: 'AAA - 1812',
      code: 'USD',
      cash: '11243.23',
      todayChange: {
        percent: '0.20',
        amount: '38916.11'
      }
    },
    {
      id: '4200',
      name: 'IRR - 4200',
      code: 'USD',
      cash: '3763.33',
      todayChange: {
        percent: '0.50',
        amount: '7916.62'
      }
    },
    {
      id: '3200',
      name: 'III - 3200',
      code: 'USD',
      cash: '2763.33',
      todayChange: {
        percent: '0',
        amount: '0'
      }
    },
    {
      id: '2100',
      name: 'TUB - 2100',
      code: 'USD',
      cash: '1283.31',
      todayChange: {
        percent: '0.08',
        amount: '5916.71'
      }
    },
    {
      id: '6000',
      name: 'DIRA - 6000',
      code: 'USD',
      cash: '3743.23',
      todayChange: {
        percent: '0.30',
        amount: '28916.56'
      }
    },
    {
      id: '7770',
      name: 'RIAN - 7770',
      code: 'USD',
      cash: '1232.45',
      todayChange: {
        percent: '0.11',
        amount: '3916.36'
      }
    },
    {
      id: '2200',
      name: 'AARA - 2200',
      code: 'USD',
      cash: '7663.11',
      todayChange: {
        percent: '-0.20',
        amount: '1916.39'
      }
    },
    {
      id: '2360',
      name: 'JIVA - 2360',
      code: 'USD',
      cash: '4564.87',
      todayChange: {
        percent: '-0.08',
        amount: '3976.29'
      }
    },
    {
      id: '3272',
      name: 'QWED - 3272',
      code: 'USD',
      cash: '4564.67',
      todayChange: {
        percent: '-0.29',
        amount: '2967.89'
      }
    },
    {
      id: '6878',
      name: 'ADSD - 6878',
      code: 'USD',
      cash: '4355.34',
      todayChange: {
        percent: '0.10',
        amount: '5916.09'
      }
    }];
    this.totalAccounts = this.data.length;
  }

  getData() {
    return this.data.splice(0, 3);
  }

  getTotalCount() {
    return this.totalAccounts;
  }
}
