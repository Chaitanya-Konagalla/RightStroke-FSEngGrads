import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FraudulentPaymentService {

  constructor(private httpclient :HttpClient) { }

  getCustomersList()
  {
    return this.httpclient.get('http://localhost:3000/Customer1');
  }

  getBannedCurrencyList()
  {
    return this.httpclient.get('http://localhost:3000/BannedCurrencies');
  }

  getBannedAccountList()
  {
    return this.httpclient.get('http://localhost:3000/BannedAccounts')
  }
}