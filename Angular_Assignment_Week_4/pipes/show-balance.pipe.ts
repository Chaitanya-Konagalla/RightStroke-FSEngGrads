import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showbalance'
})
export class ShowbalancePipe implements PipeTransform {

  transform(value: string): string
  {
    if(value!=undefined)
    {

      if(value=='55555555555')
      {
        return 'Your account balance is Rs.80,000/-'
      }
    }
  }
    

}