import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { search } from './search.interface';

@Injectable({
  providedIn: 'root'
})

export class ObservableService 
{

  constructor(private httpclient:HttpClient){}

   url='http://localhost:3000/Transactions';

   getsearches(searchTerm):Observable<search>
   {
       return this.httpclient.get<search>(this.url+'?q='+searchTerm);
   }

  getcurrencies() 
  {
    return this.httpclient.get('http://localhost:3000/Currencies')
  }

  getdocuements()
  {
    return this.httpclient.get('http://localhost:3000/docuements')
  }
}