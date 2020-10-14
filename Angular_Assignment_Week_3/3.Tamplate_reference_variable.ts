/*----------------------------app.component.html---------------------------------*/

<h3>Angular project that uses template reference variable for text box, text area and select drop down control</h3>
<div class="container">
    <div>
        <select #select [(ngModel)]="selectedmovie" (change)="log(select.value)">
            <option *ngFor="let movie of movies" [value]="movie.id">{{movie.moviename}}</option>
        </select>
    </div>
    <br>
    <div>
        <button (click)="Str=''">Clear</button>
    </div>

    {{Str}}
</div>

/*----------------------------app.component.ts-----------------------------------*/

import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAssignment1';
  selectedmovie:number=0;

  public movies:any=[
    {
      id:1,
      moviename:'Siva',
      director:'RGV'
    },
    {
      id:2,
      moviename:'Bahubali',
      director:'Rajamouli'
    },
    {
      id:3,
      moviename:'Sahoo',
      director:'Ajit'
    }
  ];
  Str:String=''
  log(id:number)
  {
    for(var m of this.movies)
    {
      if(m.id===+id)
      {
          this.Str=`This movies was directed by ${m.director} `;
      }
    }
   }
    
  }
  
  /*----------------------------app.module.ts--------------------------------------*/
  
  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
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
