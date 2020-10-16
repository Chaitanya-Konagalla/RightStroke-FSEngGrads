import {UnitconversionService } from './unit-conversion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-conversion',
  templateUrl: './unit-conversion.component.html',
  styleUrls: ['./unit-conversion.component.css']
})
export class UnitConversionComponent implements OnInit {

  From1:number;
  To1:string;
  val1:number;

  From2:string;
  To2:string;
  val2:number

  Result:any;

  Display1:boolean=false;
  Display2:boolean=true;

  values1=
  [
    {id:0,code:'mts',name:'Meters'},
    {id:1,code:'kms',name:'Kilometers'},
    {id:2,code:'cms',name:'Centimeters'},
    {id:3,code:'mms',name:'Millimeter'},
    {id:4,code:'ums',name:'Micrometers'},
    {id:5,code:'nms',name:'Nanometers'},
    {id:6,code:'mile',name:'Mile'},
    {id:7,code:'yard',name:'Yard'},
    {id:8,code:'foot',name:'Foot'},
    {id:9,code:'Inch',name:'Inch'}
  ]

  values2=
  [
    {id:'Farenheit',code:'Farenheit',name:'Farenheit'},
    {id:'Celsius',code:'Celsius',name:'Celsius'},
    {id:'Kelvin',code:'Kelvin',name:'Kelvin'}
  ]

  constructor(private n:UnitconversionService){}
  ngOnInit(): void
  {
     this.n.valuetocomponent.
     subscribe
     (
       data=>{
                this.Result=data;
             }
     )
     if(this.Result<1 && this.Result>0)
     {
        this.Result=this.Result.toExponential();
     }
  }
  ans1()
  {
   this.n.caluclate2(this.From1,this.To1,this.val1);
  }

  ans2()
  {
    this.n.caluclate1(this.From2,this.To2,this.val2);
  }

  D1()
  {
    this.Display1=false;
    this.Display2=true;
    this.Result=null
  }
  D2()
  {
    this.Display1=true;
    this.Display2=false;
    this.Result=null;
  }

}
