import { Injectable } from '@angular/core';
import { ExchangesBody, ExchangesObject } from '../json-data-import/currencies-interface';
import { BuildMapService } from './build-map.service';

/**
 * Copies exchange data
 */
@Injectable({
  providedIn: 'any',
})
export class ExchangesObjectCopyingService {
  constructor(private buildMapService: BuildMapService) {}
  /**
   * Copies subscribed exchange data and sortes them by currency iso name.
   * @param input Data fetched from subscription
   * @returns Sorted data in ExchangesObject format
   */

  copy(input: ExchangesBody): ExchangesObject {
    let output: ExchangesObject = new ExchangesObject();

    if (input.exchangeList.length === 1) {
      output.success = input.exchangeList[0].success;
      output.date = input.exchangeList[0].date;
      output.base = input.exchangeList[0].base;
      output.rates = new Map<string, number>();
      output.rates = this.buildMapService.buildMap(input.exchangeList[0].rates);
    }
    else {
      throw new Error('invalid exchange body size');
    }

    return output;
  }
}
