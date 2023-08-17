import { Injectable, isDevMode } from '@angular/core';
import { BuildMapService } from './build-map.service';
import {
  CurrenciesLocations,
  CurrencyEntry,
  ListCurrencyResponse,
} from '../json-data-import/currencies-interface';

@Injectable({
  providedIn: 'any',
})
export class CurrencyLocationsObjectsHardCopyService {
  constructor() {}

  copy(input: any): CurrenciesLocations[] {
    let output: CurrenciesLocations[] = [];
    output = input;
    output = output.sort((a, b) => a.isoName.localeCompare(b.isoName));
    return output;
  }
}
