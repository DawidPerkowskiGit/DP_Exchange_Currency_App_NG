import { Injectable } from '@angular/core';
import {
  ExchangesObject,
  NgxLineChartData,
  NgxSeriesCollection,
} from '../json-data-import/currencies-interface';

/**
 * Converts data fetched from REST APi to data format displayable by ngx-charts line chart
 */
@Injectable({
  providedIn: 'any',
})
export class LineChartDataManipulationService {
  /**
   * copies data from REST API and valid data to dsiplay NgxChart module
   * @param data input data received from REST API
   * @param targetCurrency curerncy exchange rates are compared against this curerncy
   * @returns object valid for NgxChart display
   */

  convertData(data: ExchangesObject[]): NgxLineChartData[] {
    let requestedCurerncies: string[] = [];
    for (let [key, value] of data[0].rates) {
      requestedCurerncies.push(key.toString());
    }

    let chartData: NgxLineChartData[] = [];

    requestedCurerncies.forEach(singleCurrency => {
      let singleCurrencyData = new NgxLineChartData;
      singleCurrencyData.name = singleCurrency;
      // chartData.series = new NgxSeriesCollection[];
      data.forEach(element => {
          let entryData = new NgxSeriesCollection;
          entryData.name = element.date.toString();
          entryData.value = element.rates.get(singleCurrency) || 0;

          singleCurrencyData.series.push(entryData);

      });
      chartData.push(singleCurrencyData);
    });

    return chartData;
  }

  constructor() {}
}
