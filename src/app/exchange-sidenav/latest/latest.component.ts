import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
import {
  ExchangesObject} from 'src/app/json-data-import/currencies-interface';
import { ExchangesObjectCopyingService } from 'src/app/tools/exchange-objects-hard-copy.service';
import { Observable, Subject, map } from 'rxjs';
import { CurrencyDropdownListComponent } from '../currency-list/currency-dropdown-list/currency-dropdown-list.component';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit, OnChanges {

  exchange!: ExchangesObject;

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

  importCurrencyExchangeRates(event?: Event) {
    console.log('Event log',event)
    this.jsonDataImportService
    .getLatestExchange()
    .subscribe((data: ExchangesObject) => {
      console.log(data);
      this.exchange = this.copyService.copy(data);
      this.removeBaseCurrency();
      console.log(this.exchange);
    });
  }

}

