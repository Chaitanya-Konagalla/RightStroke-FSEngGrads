import { ForexserviceService } from './forexconverter/forexconverter.service';
import { ForexconverterComponent } from './forexconverter/forexconverter.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { PipesComponent } from './pipes/pipes.component';
import { ShowbalanceofcreditcardnumberPipe } from './pipes/show-balance-of-credit-card.pipe';
import { ShowbalancePipe } from './pipes/show-balance.pipe';
import { CurrencyconverterPipe } from './pipes/currency-conversion.pipe';
import { FormattingCreditCardNumberPipe } from './pipes/formatting-credit-card-no.pipe';
import { AgeCaluclatorPipe } from './pipes/age-calculator.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ForexconverterComponent,
    PipesComponent,
    AgeCaluclatorPipe,
    FormattingCreditCardNumberPipe,
    CurrencyconverterPipe,
    ShowbalancePipe,
    ShowbalanceofcreditcardnumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ForexserviceService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }