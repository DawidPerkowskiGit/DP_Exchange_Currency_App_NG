import { Component, OnInit } from '@angular/core';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
import {
  ExchangesObject,
  SingleRatesObject
} from 'src/app/json-data-import/currencies-interface';
import { ExchangesObjectCopyingService } from 'src/app/json-data-import/exchange-objects-hard-copy';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {

  exchange!: ExchangesObject;

  constructor(private jsonDataImportService: JsonDataImportService,
    private exchangesObjectCopyingService: ExchangesObjectCopyingService) {}

  ngOnInit(): void {
    this.jsonDataImportService
      .getLatestExchange()
      .subscribe((data: ExchangesObject) => {
        // this.exchange = data;
        console.log(data);
        this.exchange = this.exchangesObjectCopyingService.copy(data);

        this.prepareData();
        console.log(this.exchange);
      });
  }

  prepareData() {
    if (this.exchange.rates.has(this.exchange.base)) {
      this.exchange.rates.delete(this.exchange.base)
  }
}

}
