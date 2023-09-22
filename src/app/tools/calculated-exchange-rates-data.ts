import { Injectable, isDevMode } from '@angular/core';
import { BuildMapService } from './build-map.service';
import {
  CalcuatedExchangeRates,
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
export class CalcuatedExchangeRatesDataService {
  constructor() {}

  /**
   * Copy the Calcualted exchange rates data
   * @param input Exchange rates date
   * @returns copied data
   */
  copy(input: CalcuatedExchangeRates): CalcuatedExchangeRates {
    let output: CalcuatedExchangeRates = new CalcuatedExchangeRates();
    output.message = input.message;
    output.exchangeDate = input.exchangeDate;
    output.requestedValue = input.requestedValue;
    output.rate = input.rate;
    output.calculatedValue = input.calculatedValue;
    output.baseCurrency = input.baseCurrency;
    output.requestedCurrency = input.requestedCurrency;
    return output;
  }
}
