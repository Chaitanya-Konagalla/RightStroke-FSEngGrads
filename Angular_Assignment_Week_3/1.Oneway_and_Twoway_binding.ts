/*--------------------------------app.component.html---------------------------------------------------------------*/

<h3>Angular Project that show cases One way and two way data binding (Property binding and Event Binding).</h3>
<div class="container">
    <!-- One way data binding -->
    <div>
        <p>Hi, I am {{name}}. Please enter your name and submit</p> 
    </div>
   
    <!-- Two way data binding -->
    <div>
        <label>Username:</label>
        <input [(ngModel)]="Firstname"/>
    </div>
    
    
    <!-- Event binding -->
    <div>
        <button (click)="read(Firstname)">Submit</button>
    </div>
    
    <!-- Property binding -->
    <div>
        <p>Angular Logo</p>
        <img [src]="url" alt="" widht="300" height="300">
    </div>
</div>

/*-----------------------------------app.component.ts-------------------------------------------------------------*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAssignment1';
  name:String="Chaitanya";
  Firstname:String="";
  url='https://c4.wallpaperflare.com/wallpaper/10/887/781/angular-javascript-html-wallpaper-preview.jpg'

  read(username:String){
      alert(`${username} you have clicked the submit button`);
    }
}

/*--------------------------------------------app.module.ts---------------------------------------------*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

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
