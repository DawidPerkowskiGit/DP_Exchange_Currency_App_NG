import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
import {
  ExchangesObject} from 'src/app/json-data-import/currencies-interface';
import { ExchangesObjectCopyingService } from 'src/app/tools/exchange-objects-hard-copy.service';
import { Observable, Subject, map } from 'rxjs';
import { CurrencyDropdownListComponent } from '../currency-list/currency-dropdown-list/currency-dropdown-list.component';
import { environment } from 'src/environments/environment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit, OnChanges {

  exchange!: ExchangesObject;

  baseCurrency = environment.DEFULT_BASE_CURRENCY;

  exchangeDate: string = new Date().toLocaleString();

  @ViewChild(CurrencyDropdownListComponent) currencyDropdownList!: CurrencyDropdownListComponent;

  constructor(private jsonDataImportService: JsonDataImportService,
    private copyService: ExchangesObjectCopyingService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes ::: ----', changes);
  }

  ngOnInit(): void {
    this.importCurrencyExchangeRates();  
  }

  removeBaseCurrency() {
      if (this.exchange.rates.has(this.exchange.base)) {
        this.exchange.rates.delete(this.exchange.base)
    }
  }

  updateBaseCurrency(baseCurrency: string) {
    console.log('Event log :::: ---',baseCurrency)
    this.baseCurrency = baseCurrency;
    this.importCurrencyExchangeRates()
  }

  updateExchangeDate(date: MatDatepickerInputEvent<Date>) {
    console.log("Previous date",this.exchangeDate)
    console.log("New data", date)
    this.exchangeDate = date.value!.toString();
    this.importCurrencyExchangeRates()
   }

   transformDate(date: Date) {
    var datePipe = new DatePipe('en-EU');
    //TODO
    // this.exchangeDate = datePipe.transform(date, 'dd/MM/yyyy');
   }

  // importCurrencyExchangeRates(baseCurrency?: string) {
  //   console.log('Event log :::: ---',baseCurrency)
  //   this.jsonDataImportService
  //   .getLatestExchange(baseCurrency)
  //   .subscribe((data: ExchangesObject) => {
  //     console.log(data);
  //     this.exchange = this.copyService.copy(data);
  //     this.removeBaseCurrency();
  //     console.log(this.exchange);
  //   });
  // }

  importCurrencyExchangeRates() {

    this.jsonDataImportService
    .getLatestExchange(this.baseCurrency, this.exchangeDate)
    .subscribe((data: ExchangesObject) => {
      console.log(data);
      this.exchange = this.copyService.copy(data);
      this.removeBaseCurrency();
      console.log(this.exchange);
    });
  }

}

