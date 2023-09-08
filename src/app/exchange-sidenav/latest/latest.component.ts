import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  isDevMode,
} from '@angular/core';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
import { ExchangesBody, ExchangesObject } from 'src/app/json-data-import/currencies-interface';
import { ExchangesObjectCopyingService } from 'src/app/tools/exchange-objects-hard-copy.service';
import { Observable, Subject, map } from 'rxjs';
import { CurrencyDropdownListComponent } from '../currency-list/currency-dropdown-list/currency-dropdown-list.component';
import { environment } from 'src/environments/environment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { DatePickerToStringService } from 'src/app/tools/date-picker-to-string-service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent implements OnInit, OnChanges {
  exchange!: ExchangesObject;

  baseCurrency = environment.DEFAULT_BASE_CURRENCY;

  exchangeDate: Date = new Date();

  currencyPickerTitle: string = "Target currency";

  constructor(
    private jsonDataImportService: JsonDataImportService,
    private copyService: ExchangesObjectCopyingService,
    private dateTransformService: DatePickerToStringService,
  ) {}

  dataIsBeeingFetched: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (isDevMode()) {
      console.log('changes ::: ----', changes);
    }
  }

  ngOnInit(): void {
    this.importCurrencyExchangeRates();
  }
  /**
   * Removed base currency from exchange rates list
   */

  removeBaseCurrency() {
    if (this.exchange.rates.has(this.exchange.base)) {
      this.exchange.rates.delete(this.exchange.base);
    }
  }

  /**
   * Updates base currency value
   * @param baseCurrency base currency value retrieved from dropdown currency picker
   */

  updateBaseCurrency(baseCurrency: string) {
    if (isDevMode()) {
      console.log('Event log :::: ---', baseCurrency);
    }

    this.baseCurrency = baseCurrency;
    this.importCurrencyExchangeRates();
  }

  /**
   * Updates the exchange rates date
   * @param date Exchange rate date retireved from date picker
   */

  updateExchangeDate(date: MatDatepickerInputEvent<Date>) {
    if (isDevMode()) {
      console.log('Previous date', this.exchangeDate);
      console.log('New data', date);
    }

    this.exchangeDate = date.value!;
    this.importCurrencyExchangeRates();
  }

  /**
   * Perform REST API call and retieve exchage rates data
   */
  importCurrencyExchangeRates() {
    this.dataIsBeeingFetched = true;
    this.jsonDataImportService
      .getLatestExchange(this.baseCurrency, this.dateTransformService.transformDateToString(this.exchangeDate))
      .subscribe((data: ExchangesBody) => {
        if (isDevMode()) {
          console.log(data);
        }
        this.exchange = this.copyService.copy(data);
        this.removeBaseCurrency();
        if (isDevMode()) {
          console.log(this.exchange);
        }
        this.dataIsBeeingFetched = false;
      });

  }
}
