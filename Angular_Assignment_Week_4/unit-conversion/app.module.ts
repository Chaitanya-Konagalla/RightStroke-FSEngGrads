import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FraudulentPaymentComponent } from './fraudulent-payment/fraudulent-payment.component';
import { UnitConversionComponent } from './unit-conversion/unit-conversion.component';
import { UnitconversionService } from './unit-conversion/unit-conversion.service';


@NgModule({
  declarations: [
    AppComponent,
    FraudulentPaymentComponent,
    UnitConversionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UnitconversionService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }