import { dropdownservice } from './drop-downs/drop-downs.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { DropDownsComponent } from './drop-downs/drop-downs.component';


@NgModule({
  declarations: [
    AppComponent,
    DropDownsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [dropdownservice],
  
  bootstrap: [AppComponent]
})
export class AppModule { }