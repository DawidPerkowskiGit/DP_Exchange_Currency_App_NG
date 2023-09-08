import { Injectable } from '@angular/core';
import { ExchangesBody, ExchangesObject } from '../json-data-import/currencies-interface';
import { BuildMapService } from './build-map.service';

/**
 * Copies exchange data
 */
@Injectable({
  providedIn: 'any',
})
export class HistoricalExchangesOneCurrencyCopySevice {
  constructor(private buildMapService: BuildMapService) {}
  /**
   * Copies subscribed exchange data and sortes them by exchange date.
   * @param input Data fetched from subscription
   * @returns Sorted data in ExchangesObject format
   */

  copy(input: ExchangesBody): ExchangesObject[] {
    let output: ExchangesObject[] = [];

    input.exchangeList.forEach((element) => {
      let singleObject = new ExchangesObject();
      singleObject.base = element.base;
      singleObject.date = element.date;
      singleObject.success = element.success;
      singleObject.rates = this.buildMapService.buildMap(element.rates);
      output.push(singleObject);
    });
    return output;
  }

  copySingleDate(input: ExchangesObject): ExchangesObject[] {
    let output: ExchangesObject[] = [];
    let singleObject = new ExchangesObject();
    singleObject.base = input.base;
    singleObject.date = input.date;
    singleObject.success = input.success;
    singleObject.rates = this.buildMapService.buildMap(input.rates);
    output.push(singleObject);
    return output;
  }
}
