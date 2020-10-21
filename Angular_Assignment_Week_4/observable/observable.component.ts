import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Currency } from './Currency';
import { documents } from './docuements';
import { ObservableService } from './observable.service';
import { search } from './search.interface';
import {filter,map,debounceTime,distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  currencies: any;
  SearchResults:search;
  count:number;
  doc:any

  constructor(private dataService: ObservableService) { }

  public curr :Observable<Currency[]>=null;
  public docc :Observable<documents[]>=null;

  ngOnInit() 
  {
    this.dataService.getcurrencies().pipe
    (
    map((data:Currency[])=>
    {
      let crr:Currency[]=[]
      data.map(d=>
        {
         if(d.name!='AAA' && d.name!='HHH') { crr.push(d) };
        }
      )
      return crr;
    }))
    .subscribe
    (
      (res:Currency[])=>
       {
         this.currencies=res;
       }
    )

    this.dataService.getdocuements().pipe
    (
    map((data:documents[])=>
    {
      let crr:documents[]=[]
      data.map(d=>
        {
         if(d.status!='Partially submitted' && d.status!='Incorrect') { crr.push(d) };
        }
      )
      return crr;
    }))
    .subscribe
    (
      (res:documents[])=>
       {
         this.doc=res;
       }
    )



    
   }

  @ViewChild('searchForm') searchForm:NgForm

  ngAfterViewInit():void
  {


      const formvalue=this.searchForm.valueChanges;  

      formvalue.
      pipe(filter(()=>this.searchForm.valid),map(data=>data.searchTerm),debounceTime(500),
              distinctUntilChanged(),switchMap(data=>this.dataService.getsearches(data))).
      subscribe(res=>{this.SearchResults=res; this.count=Object.keys(res).length})
  }


}
