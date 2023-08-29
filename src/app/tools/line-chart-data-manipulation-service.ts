import { Injectable } from "@angular/core";
import { ExchangesObject, NgxLineChartData, NgxSeriesCollection } from "../json-data-import/currencies-interface";

/**
 * Converts data fetched from REST APi to data format displayable by ngx-charts line chart
 */
@Injectable({
    providedIn: 'any',
  })
  export class LineChartDataManipulationService {
    convertData(data: ExchangesObject[], targetCurrency: string) : NgxLineChartData[] {
        let chartData = new NgxLineChartData;
        chartData.name = targetCurrency;
        // chartData.series = new NgxSeriesCollection[];
        data.forEach(element => {
            let entryData = new NgxSeriesCollection;
            entryData.name = element.date.toString();
            entryData.value = element.rates.get(targetCurrency) || 0;

            chartData.series.push(entryData);
        });
        return Array.of(chartData);
    }

    constructor() {}
  }