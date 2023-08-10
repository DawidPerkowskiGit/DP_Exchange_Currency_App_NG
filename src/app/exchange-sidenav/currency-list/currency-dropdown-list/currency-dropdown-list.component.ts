import { Component, OnInit } from '@angular/core';
import { ListCurrencyResponse } from 'src/app/json-data-import/currencies-interface';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
import { CurrencyObjectsHardCopyService } from 'src/app/tools/currency-objects-hard-copy.service';


@Component({
  selector: 'app-currency-dropdown-list',
  templateUrl: './currency-dropdown-list.component.html',
  styleUrls: ['./currency-dropdown-list.component.scss'],
})
export class CurrencyDropdownListComponent implements OnInit {

  currencyList!: ListCurrencyResponse;

  selectedCurrency = 'EUR';

  constructor(private jsonDataImportService: JsonDataImportService,
    private copyService: CurrencyObjectsHardCopyService) {}

  ngOnInit(): void {
    console.log(this.currencyList);
    this.jsonDataImportService
      .getCurrencies()
      .subscribe((data: ListCurrencyResponse) => {
        this.currencyList = this.copyService.copy(data);
        console.log(this.currencyList);
      });

  }

}
