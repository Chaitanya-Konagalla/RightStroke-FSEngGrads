import { Component, OnInit } from '@angular/core';
import { dropdownservice } from './drop-downs.service';

@Component({
  selector: 'app-drop-downs',
  templateUrl: './drop-downs.component.html',
  styleUrls: ['./drop-downs.component.css']
})
export class DropDownsComponent implements OnInit {

  countryList:any;
   customerTypes:any;
   creditcardTypes:any;
   currency:any;
   constructor(private n:dropdownservice){}
   ngOnInit(): void 
   {
        this.n.getcountry().
        toPromise().then
        (
        
          data1=>
          {
            this.countryList=data1;
          }
        )

        this.n.getcustomer().
        toPromise().then
        (
           data2=>
           {
             this.customerTypes=data2;
           }
        )

        this.n.getcreditcard().
        toPromise().then
        (
          data3=>
          {
            this.creditcardTypes=data3;
          }
        )

        this.n.getcurrency().
        toPromise().then
        (
          data4=>
          {
            this.currency=data4;
          }
        )
   }
    
  cities: Array<any>;
  changeCountry(count) {
    this.cities = this.countryList.find(con => con.id == count).cities;
  }

}
