import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showbalanceofcreditcardnumber'
})
export class ShowbalanceofcreditcardnumberPipe implements PipeTransform {

  transform(value:string): string 
  {
    console.log(value)
    if(value!=undefined)
    {

      if(value.length<19)
      {
        return ' '
      }
      else if(value=="1234-5678-9012-3456")
      {
        return 'Hello user you can only withdraw Rs.40,000/- per day';
      }
      else{
        return 'You enterd a invalid credt card number'
      }

    }
  }
    
}