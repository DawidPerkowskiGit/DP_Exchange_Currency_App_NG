import { Component, OnInit, ViewChild, isDevMode } from '@angular/core';
import {
  ExchangesBody,
  ExchangesObject,
  NgxLineChartData,
} from 'src/app/json-data-import/currencies-interface';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
import { DatePickerToStringService } from 'src/app/tools/date-picker-to-string-service';
import { HistoricalExchangesOneCurrencyCopySevice } from 'src/app/tools/historical-exchanges-one-currency-copy-service';
import { environment } from 'src/environments/environment';
import { CurrencyDropdownListComponent } from '../currency-list/currency-dropdown-list/currency-dropdown-list.component';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { LineChartDataManipulationService } from 'src/app/tools/line-chart-data-manipulation-service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  exchange$: ExchangesObject[] = [];

  baseCurrency = environment.DEFAULT_BASE_CURRENCY;

  requestedCurrency = environment.DEFAULT_REQUESTED_CURRENCY;

  startDate: Date = new Date();

  finishDate: Date = new Date();

  requestedcurrencyTitle: string = 'Exchange rates of:';
  baseCurrencyTitle: string = 'Compared to:';
  startDateTitle: string = 'Start Date';
  finishDateTitle: string = 'Finish Date';

  view: [number, number] = [800, 500];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date of exchange';
  yAxisLabel: string = 'Rate';
  timeline: boolean = true;
  autoscale: boolean = true;
  yScaleMin: number = 1.0;
  yScaleMax: number = 5.0;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  chartData!: NgxLineChartData[];

  dataIsBeeingFetched: boolean = false;

  dropDownMultichoiceLoaded: boolean = false;

  /**
   * Ngx charts onSelect event handler
   * @param data Data to process
   */
  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  /**
   * Ngx charts onActive event handler
   * @param data Data to process
   */
  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  /**
   * Ngx charts onDeactivate event handler
   * @param data Data to process
   */

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  constructor(
    private jsonDataImportService: JsonDataImportService,
    private dateTransformService: DatePickerToStringService,
    private copyService: HistoricalExchangesOneCurrencyCopySevice,
    private chartDataConvertService: LineChartDataManipulationService
  ) {}

  ngOnInit(): void {
    this.startDate.setDate(this.startDate.getDate() - 7);
  }

  /**
   * Fetch exchange rates of single currency and prepare them for displaying
   */
  importHistoricalOneCurrencyExchangeRates() {
    let startDate = this.dateTransformService.transformDateToString(
      this.startDate
    );
    let finishDate = this.dateTransformService.transformDateToString(
      this.finishDate
    );
    this.dataIsBeeingFetched = true;

    if (startDate === finishDate) {
      this.jsonDataImportService
        .getHistoricalExchangeRatesOfOneCurrencySignleDay(
          this.baseCurrency,
          this.requestedCurrency,
          startDate,
          finishDate
        )
        .subscribe((data) => {
          if (isDevMode()) {
            console.log(data);
          }
          this.exchange$ = this.copyService.copySingleDate(data);
          if (isDevMode()) {
            console.log(this.exchange$);
          }
          this.chartData = this.chartDataConvertService.convertData(
            this.exchange$
          );
          this.yAxisLabel = 'Rates based on ' + this.baseCurrency;
          [this.yScaleMin, this.yScaleMax] =
            this.findMinAndMaxValueSingleDay(data);
          [this.yScaleMin, this.yScaleMax] = this.calculateNewMinAndMax(
            this.yScaleMin,
            this.yScaleMax
          );
          this.dataIsBeeingFetched = false;
        });
    } else {
      this.jsonDataImportService
        .getHistoricalExchangeRatesOfOneCurrency(
          this.baseCurrency,
          this.requestedCurrency,
          startDate,
          finishDate
        )
        .subscribe((data: ExchangesBody) => {
          if (isDevMode()) {
            console.log(data);
          }
          this.exchange$ = this.copyService.copy(data);
          // this.exchange$ = data;
          if (isDevMode()) {
            console.log(this.exchange$);
          }
          this.chartData = this.chartDataConvertService.convertData(
            this.exchange$
            // this.requestedCurrency
          );
          this.yAxisLabel = 'Rates based on ' + this.baseCurrency;
          [this.yScaleMin, this.yScaleMax] = this.findMinAndMaxValue(
            this.exchange$
          );
          [this.yScaleMin, this.yScaleMax] = this.calculateNewMinAndMax(
            this.yScaleMin,
            this.yScaleMax
          );
          this.dataIsBeeingFetched = false;
        });
    }
  }

  /**
   * Update base currency selected in the dropdown menu
   * @param baseCurrency Base currency to update
   */
  updateBaseCurrency(baseCurrency: string) {
    if (isDevMode()) {
      console.log('Event log base currency :::: ---', baseCurrency);
    }

    this.baseCurrency = baseCurrency;
  }

  /**
   * Update the requested currency selected in the dropdown menu
   * @param requestedCurrency Requested currency
   */
  updateRequestedCurrency(requestedCurrency: string) {
    if (isDevMode()) {
      console.log('Event log requested currency:::: ---', requestedCurrency);
    }

    this.requestedCurrency = requestedCurrency;
    // this.requestedCurrency+","+requestedCurrency;
  }
  /**
   * Update exchange start date selected in the calendar
   * @param date Date of exchange to update
   */

  updateStartDate(date: MatDatepickerInputEvent<Date>) {
    if (isDevMode()) {
      console.log('Previous start date', this.startDate);
      console.log('New data', date);
    }

    this.startDate = date.value!;
  }

  /**
   * Update exchange end date selected in the calendar
   * @param date Date of exchange to update
   */

  updateFinishDate(date: MatDatepickerInputEvent<Date>) {
    if (isDevMode()) {
      console.log('Previous start date', this.finishDate);
      console.log('New data', date);
    }

    this.finishDate = date.value!;
  }

  /**
   * Trigger fetching the data from the REST API
   */

  requestData() {
    this.importHistoricalOneCurrencyExchangeRates();
  }

  /**
   * Finds min and max values of the exchange rates
   * @param data Data to search trough
   * @returns min and max values of the exchange rates
   */

  findMinAndMaxValue(data: ExchangesObject[]): [number, number] {
    let maxValue: number = 0;
    let minValue: number = 999999999;
    data.forEach((element) => {
      for (let [key, value] of element.rates) {
        if (value > maxValue) {
          maxValue = value;
        }
        if (value < minValue) {
          minValue = value;
        }
      }
    });
    return [minValue, maxValue];
  }

  /**
   * Finds min and max values of the exchange rates
   * @param data Data to search trough
   * @returns min and max values of the exchange rates
   */

  findMinAndMaxValueSingleDay(data: ExchangesObject): [number, number] {
    let maxValue: number = 0;
    let minValue: number = 999999999;
    for (let [key, value] of data.rates) {
      if (value > maxValue) {
        maxValue = value;
      }
      if (value < minValue) {
        minValue = value;
      }
    }
    return [minValue, maxValue];
  }

  /**
   * Calculates the minimum and maximum values for the chart scale
   * @param minValue minimum value
   * @param maxValue maximum value
   * @returns minimum and maximum for the chart scale
   */
  calculateNewMinAndMax(minValue: number, maxValue: number): [number, number] {
    let offset = maxValue * 0.2;
    let newMinValue = minValue - offset > 0 ? minValue - offset : -0.01;
    let newMaxValue = maxValue + offset;
    return [newMinValue, newMaxValue];
  }
}
