import { Injectable } from '@angular/core';
import { ExchangesObject } from '../json-data-import/currencies-interface';
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

  copy(input: ExchangesObject): ExchangesObject {
    let output: ExchangesObject = new ExchangesObject();

    output.success = input.success;
    output.date = input.date;
    output.base = input.base;
    output.rates = new Map<string, number>();
    output.rates = this.buildMapService.buildMap(input.rates);
    return output;
  }
}
