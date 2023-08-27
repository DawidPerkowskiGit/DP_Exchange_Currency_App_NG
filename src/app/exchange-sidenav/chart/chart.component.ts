import { Component, OnInit, isDevMode } from '@angular/core';
import { ExchangesObject } from 'src/app/json-data-import/currencies-interface';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
import { DatePickerToStringService } from 'src/app/tools/date-picker-to-string-service';
import { HistoricalExchangesOneCurrencyCopySevice } from 'src/app/tools/historical-exchanges-one-currency-copy-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  exchange$: ExchangesObject[] = [];

  baseCurrency = environment.DEFAULT_BASE_CURRENCY;

  requestedCurrency = environment.DEFAULT_REQUESTED_CURRENCY;

  startDate: Date = new Date();

  finishDate: Date = new Date();


  constructor(    private jsonDataImportService: JsonDataImportService,
    private dateTransformService: DatePickerToStringService,
    private copyService: HistoricalExchangesOneCurrencyCopySevice) { }

  ngOnInit(): void {
    this.importHistoricalOneCurrencyExchangeRates();
  }

  importHistoricalOneCurrencyExchangeRates() {
    let startDate = this.dateTransformService.transformDateToString(this.startDate);
    let finishDate = this.dateTransformService.transformDateToString(this.finishDate);
    this.setupDummyDate();
    this.jsonDataImportService
      .getHistoricalExchangeRatesOfOneCurrency(this.baseCurrency, this.requestedCurrency, startDate, finishDate)
      .subscribe((data: ExchangesObject[]) => {
        if (isDevMode()) {
          console.log(data);
        }
        this.exchange$ = this.copyService.copy(data);
        if (isDevMode()) {
          console.log(this.exchange$);
        }
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

}
