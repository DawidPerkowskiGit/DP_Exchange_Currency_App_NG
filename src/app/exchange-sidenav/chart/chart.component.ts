import { Component, OnInit, ViewChild, isDevMode } from '@angular/core';
import { ExchangesObject, NgxLineChartData } from 'src/app/json-data-import/currencies-interface';
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
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  // chartData = [
  //   {
  //     "name": "Germany",
  //     "series": [
  //       {
  //         "name": "1990",
  //         "value": 72000000
  //       },
  //       {
  //         "name": "2010",
  //         "value": 73000000
  //       },
  //       {
  //         "name": "2011",
  //         "value": 71400000
  //       }
  //     ]
  //   },
  // ];
  

  exchange$: ExchangesObject[] = [];

  baseCurrency = environment.DEFAULT_BASE_CURRENCY;

  requestedCurrency = environment.DEFAULT_REQUESTED_CURRENCY;

  startDate: Date = new Date();

  finishDate: Date = new Date();

  requestedcurrencyTitle: string = "Exchange rates of:";
  baseCurrencyTitle: string = "Compared to:";
  startDateTitle: string = "Start Date";
  finishDateTitle: string = "Finish Date";

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

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  chartData!: NgxLineChartData[];

  dataIsBeeingFetched: boolean = false;


  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  constructor(    private jsonDataImportService: JsonDataImportService,
    private dateTransformService: DatePickerToStringService,
    private copyService: HistoricalExchangesOneCurrencyCopySevice,
    private chartDataConvertService: LineChartDataManipulationService,) { }

  ngOnInit(): void {
    this.setupDummyDate();
  }

  importHistoricalOneCurrencyExchangeRates() {
    let startDate = this.dateTransformService.transformDateToString(this.startDate);
    let finishDate = this.dateTransformService.transformDateToString(this.finishDate);
    this.dataIsBeeingFetched = true;

    this.jsonDataImportService
      .getHistoricalExchangeRatesOfOneCurrency(this.baseCurrency, this.requestedCurrency, startDate, finishDate)
      .subscribe((data: ExchangesObject[]) => {
        if (isDevMode()) {
          console.log(data);
        }
        this.exchange$ = this.copyService.copy(data);
        // this.exchange$ = data;
        if (isDevMode()) {
          console.log(this.exchange$);
        }
        this.chartData = this.chartDataConvertService.convertData(this.exchange$, this.requestedCurrency);
        this.yAxisLabel = "Rates based on " + this.baseCurrency;
        this.dataIsBeeingFetched = false;
      });

  }

  setupDummyDate() {
    this.startDate.setFullYear(2023);
    this.startDate.setMonth(6);
    this.startDate.setDate(1);
    this.finishDate.setFullYear(2023);
    this.finishDate.setMonth(6);
    this.finishDate.setDate(20);
  }

  updateBaseCurrency(baseCurrency: string) {
    if (isDevMode()) {
      console.log('Event log base currency :::: ---', baseCurrency);
    }

    this.baseCurrency = baseCurrency;
  }

  updateRequestedCurrency(requestedCurrency: string) {
    if (isDevMode()) {
      console.log('Event log requested currency:::: ---', requestedCurrency);
    }

    this.requestedCurrency = requestedCurrency;

  }

  updateStartDate(date: MatDatepickerInputEvent<Date>) {
    if (isDevMode()) {
      console.log('Previous start date', this.startDate);
      console.log('New data', date);
    }

    this.startDate = date.value!;
  }

  updateFinishDate(date: MatDatepickerInputEvent<Date>) {
    if (isDevMode()) {
      console.log('Previous start date', this.finishDate);
      console.log('New data', date);
    }

    this.finishDate = date.value!;
  }

  requestData() {
    this.importHistoricalOneCurrencyExchangeRates();
  }

}
