import { Component, OnInit, ViewChild, isDevMode } from '@angular/core';
import { ExchangesObject } from 'src/app/json-data-import/currencies-interface';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
import { DatePickerToStringService } from 'src/app/tools/date-picker-to-string-service';
import { HistoricalExchangesOneCurrencyCopySevice } from 'src/app/tools/historical-exchanges-one-currency-copy-service';
import { environment } from 'src/environments/environment';
import { CurrencyDropdownListComponent } from '../currency-list/currency-dropdown-list/currency-dropdown-list.component';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

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

  requestedcurrencyTitle: string = "Exchange rates of:";
  baseCurrencyTitle: string = "Compared to:";
  startDateTitle: string = "Start Date";
  finishDateTitle: string = "Finish Date";

  @ViewChild(CurrencyDropdownListComponent)
  baseCurrencyDropDownList!: CurrencyDropdownListComponent;

  @ViewChild(CurrencyDropdownListComponent)
  requestedCurrencyDropDownList!: CurrencyDropdownListComponent;


  constructor(    private jsonDataImportService: JsonDataImportService,
    private dateTransformService: DatePickerToStringService,
    private copyService: HistoricalExchangesOneCurrencyCopySevice) { }

  ngOnInit(): void {
    this.setupDummyDate();
    // this.importHistoricalOneCurrencyExchangeRates();
  }

  importHistoricalOneCurrencyExchangeRates() {
    let startDate = this.dateTransformService.transformDateToString(this.startDate);
    let finishDate = this.dateTransformService.transformDateToString(this.finishDate);

    this.jsonDataImportService
      .getHistoricalExchangeRatesOfOneCurrency(this.baseCurrency, this.requestedCurrency, startDate, finishDate)
      .subscribe((data: ExchangesObject[]) => {
        if (isDevMode()) {
          console.log(data);
        }
        // this.exchange$ = this.copyService.copy(data);
        this.exchange$ = data;
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
