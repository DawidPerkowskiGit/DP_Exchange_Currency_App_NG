import { Injectable } from '@angular/core';
import { ExchangesObject } from '../json-data-import/currencies-interface';
import { BuildMapService } from './build-map.service';

/**
 * Copies exchange data
 */
@Injectable({
  providedIn: 'any',
})
export class HistoricalExchangesOneCurrencyCopySevice  {
  constructor(private buildMapService: BuildMapService) {}
  /**
   * Copies subscribed exchange data and sortes them by exchange date.
   * @param input Data fetched from subscription
   * @returns Sorted data in ExchangesObject format
   */

  copy(input: ExchangesObject[]): ExchangesObject[] {
    let output: ExchangesObject[] = [];

    input.forEach(element => {
        output.push(element);
    });
    return output;
  }
}
