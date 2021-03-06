import { ForexserviceService } from './forexconverter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forexconverter',
  templateUrl: './forexconverter.component.html',
  styleUrls: ['./forexconverter.component.css']
})
export class ForexconverterComponent implements OnInit {
  From:number;
  To:string;
  value:number;
  Result:any;
  code:string;
  title = 'angularAssignment1';
  currency=[
    {id:0,code:'AUD'},
    {id:1,code:'CAD'},
    {id:2,code:'EUR'},
    {id:3,code:'GBP'},
    {id:4,code:'INR'},
    {id:5,code:'NZD'},
    {id:6,code:'USD'},

  ]
  
  constructor(private n:ForexserviceService){

  }
  ngOnInit(): void 
  {
    this.n.value_to_be_send_to_components.
    subscribe(
      data=>{
        this.Result=data;
      }
    )

    this.n.value_to_be_send_to_pipecoversion.
    subscribe(
      val=>{
        this.code=val;
      }
    )
  }
  caluclate(){
      this.n.conversion(this.From,this.To,this.value);
  }      
}
