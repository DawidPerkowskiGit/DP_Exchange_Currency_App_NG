import { Injectable, isDevMode } from "@angular/core";

@Injectable({
    providedIn: 'any',
  })
  export class DatePickerToStringService {
    constructor() {}

    transformDateToString(exchangeDate: Date): string {
        var monthString = (exchangeDate.getMonth()+ 1).toString();
        if (isDevMode()) {
          console.log("console.log(date.getMonth())",exchangeDate.getMonth())
        }
        if (exchangeDate.getMonth() < 10) {
          monthString = '0' + monthString;
        }
    
        var dayString = (exchangeDate.getDate()).toString();
        if (isDevMode()) {
          console.log("console.log(date.getDate());",exchangeDate.getDate());
        }
        if (exchangeDate.getDate() < 10) {
          dayString = '0' + dayString;
        }
    
        var result = exchangeDate.getFullYear().toString() + '-' + monthString + '-' + dayString;
        if (isDevMode()) {
          console.log("Transformed date ::: ----  " ,result);
    
        }
        return result;
        // this.exchangeDate = datePipe.transform(date, 'dd/MM/yyyy')
      }
  }