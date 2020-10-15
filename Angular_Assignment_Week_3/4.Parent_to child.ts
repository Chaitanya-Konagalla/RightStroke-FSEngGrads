/*------------------------------------------app.component.html----------------------------------------*/

<div class="container p-2">
    <app-child *ngFor="let g of Games" [value1]="g.game"></app-child>
</div>

/*------------------------------------------app.component.ts------------------------------------------*/

import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'angularAssignment1';
  
  Games=[
    {id:1,game:"COD"},
    {id:2,game:"PUBG"},
    {id:2,game:"GTA"}
  ];
  
}

/*------------------------------------------child.component.html--------------------------------------*/

<p>The selected game is {{value1}}</p>

/*------------------------------------------child.component.ts----------------------------------------*/

import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  constructor() { }

  @Input()
  public value1:String;

  ngOnInit(): void {
  }

}

/*------------------------------------------app.module.ts---------------------------------------------*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
