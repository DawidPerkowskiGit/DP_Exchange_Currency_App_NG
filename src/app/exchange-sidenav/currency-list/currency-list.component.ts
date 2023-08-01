import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ListCurrencyResponse } from 'src/app/json-data-import/currencies-interface';
import { JsonDataImportComponent } from 'src/app/json-data-import/json-data-import.component';
@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss'],
})
export class CurrencyListComponent implements OnInit, AfterViewInit {
  currencyList$!: ListCurrencyResponse;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.apiService);
  }

  @ViewChild(JsonDataImportComponent, { static: true })
  apiService!: JsonDataImportComponent;

  ngOnInit(): void {
    console.log(this.apiService);

    this.apiService.getCurrencies().subscribe((currencies) => {
      this.currencyList$ = currencies;
      console.log(this.currencyList$.currencies);
    });
  }
}
