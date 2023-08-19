import { Injectable, isDevMode } from '@angular/core';
import { BuildMapService } from './build-map.service';
import {
  CurrenciesLocations,
  CurrencyEntry,
  ListCurrencyResponse,
} from '../json-data-import/currencies-interface';
/**
 * Service for copying currency and locations data
 */
@Injectable({
  providedIn: 'any',
})
export class CurrencyLocationsObjectsHardCopyService {
  constructor() {}

  /**
   * Copies subscribed currencies and locations data and sortes them by currency iso name.
   * @param input Data fetched from subscription
   * @returns Sorted data in CurrenciesLocations[] format
   */
  copy(input: any): CurrenciesLocations[] {
    let output: CurrenciesLocations[] = [];
    output = input;
    output = output.sort((a, b) => a.isoName.localeCompare(b.isoName));
    return output;
  }
}
