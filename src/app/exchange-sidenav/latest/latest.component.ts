import { Component, OnInit } from '@angular/core';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
import {
  ExchangesObject} from 'src/app/json-data-import/currencies-interface';
import { ExchangesObjectCopyingService } from 'src/app/tools/exchange-objects-hard-copy.service';
import { Observable, Subject, map } from 'rxjs';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {

  exchange!: ExchangesObject;

  constructor(private jsonDataImportService: JsonDataImportService,
    private copyService: ExchangesObjectCopyingService) {}

  ngOnInit(): void {
    this.jsonDataImportService
      .getLatestExchange()
      .subscribe((data: ExchangesObject) => {
        console.log(data);
        this.exchange = this.copyService.copy(data);
        this.removeBaseCurrency();
        console.log(this.exchange);
      });
  }

  removeBaseCurrency() {
      if (this.exchange.rates.has(this.exchange.base)) {
        this.exchange.rates.delete(this.exchange.base)
    }
  }
}

