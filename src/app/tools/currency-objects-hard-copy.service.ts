import { Injectable, isDevMode } from '@angular/core';
import { BuildMapService } from './build-map.service';
import {
  CurrencyEntry,
  ListCurrencyResponse,
} from '../json-data-import/currencies-interface';

/**
 * Copies currency data
 */
@Injectable({
  providedIn: 'any',
})
export class CurrencyObjectsHardCopyService {
  constructor(private buildMapService: BuildMapService) {}
  /**
   * Copies subscribed currencies data and sortes them by currency iso name.
   * @param input Data fetched from subscription
   * @returns   Sorted data in ListCurrencyResponse format
   */

  copy(input: any): ListCurrencyResponse {
    let output: ListCurrencyResponse = new ListCurrencyResponse();
    Object.keys(input.currencies).forEach((key) => {
      output.currencies.push(new CurrencyEntry(key, input.currencies[key]));
    });
    output.currencies = output.currencies.sort((a, b) =>
      a.isoName.localeCompare(b.isoName)
    );
    return output;
  }
}
