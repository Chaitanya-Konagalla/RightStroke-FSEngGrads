import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  
  ngOnInit(): void {
  }

  age:number;
  birthdate:string
  num:string;

  Account_balance:string
  Limit:string;

  From:number;
  To:string;
  value:number;
  Result:any;
  code:string;

  currency=[
   {id:0,code:'AUD'},
   {id:1,code:'CAD'},
   {id:2,code:'EUR'},
   {id:3,code:'GBP'},
   {id:4,code:'INR'},
   {id:5,code:'NZD'},
   {id:6,code:'USD'},

 ]

}
