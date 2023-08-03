import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  SkipSelf,
  OnDestroy,
} from '@angular/core';
import { ApiServiceService } from 'src/app/json-data-import/api-service/api-service.service';
import {
  ListCurrencyResponse,
  SingleCurrencyObject,
} from 'src/app/json-data-import/currencies-interface';
import { JsonDataImportComponent } from 'src/app/json-data-import/json-data-import.component';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss'],
})
export class CurrencyListComponent implements OnInit {

  currencyList: SingleCurrencyObject[] = [];

  constructor(private jsonDataImportService: JsonDataImportService) {}

  ngOnInit(): void {
    console.log(this.currencyList);
    this.jsonDataImportService
      .getCurrencies()
      .subscribe((data: ListCurrencyResponse) => {
        this.currencyList = data.currencies;
        // this.currencyList = Array.from(Object.values(data.currencies));
        console.log(this.currencyList);
      });
  }
}
