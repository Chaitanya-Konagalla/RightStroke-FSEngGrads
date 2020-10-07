interface PaymentManager{
    doPayment:(String)=>String;
    getPaymentStatus:(String)=>String

}

class UPIPaymentManagerImpl implements PaymentManager{
    refnum:String;
    paymentCredits:String;
    
    doPayment(paymentCredits:String){
        this.paymentCredits=paymentCredits;
        return `Rs.${this.paymentCredits} is credited to your UPI`
    }
    getPaymentStatus(refnum:String){
       this.refnum=refnum;
       return `The ${refnum} reference number payment is successfully done`;
    }
}

class CreditCardPaymentManagerImpl implements PaymentManager{
    refnum:String;
    paymentCredits:String;
    
    doPayment(paymentCredits:String){
        this.paymentCredits=paymentCredits;
        return `Rs.${this.paymentCredits} is credited to your Credit Card`
    }
    getPaymentStatus(refnum:String){
       this.refnum=refnum;
       return `The ${refnum} reference number payment is successfully done`;
    }
}

let upipay:PaymentManager=new UPIPaymentManagerImpl();
console.log(upipay.doPayment("50,000/-"));
console.log(upipay.getPaymentStatus("098768532478"))

let cardpay:PaymentManager=new CreditCardPaymentManagerImpl();
console.log(cardpay.doPayment("90,000/-"));
console.log(cardpay.getPaymentStatus("026589641908"))


/*

Rs.50,000/- is credited to your UPI
The 098768532478 reference number payment is successfully done
Rs.90,000/- is credited to your Credit Card
The 026589641908 reference number payment is successfully done

*/