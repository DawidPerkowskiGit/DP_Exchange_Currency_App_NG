import { Component, OnInit, isDevMode } from '@angular/core';
import { ListCurrencyResponse } from 'src/app/json-data-import/currencies-interface';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
import { CurrencyObjectsHardCopyService } from 'src/app/tools/currency-objects-hard-copy.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss'],
})
export class CurrencyListComponent implements OnInit {
  currencyList!: ListCurrencyResponse;

  constructor(
    private jsonDataImportService: JsonDataImportService,
    private copyService: CurrencyObjectsHardCopyService
  ) {}

  /**
   * Get currencies list from the API on the view initalization
   */
  ngOnInit(): void {
    if (isDevMode()) {
      console.log(this.currencyList);
    }

    this.jsonDataImportService
      .getCurrencies()
      .subscribe((data: ListCurrencyResponse) => {
        this.currencyList = this.copyService.copy(data);
        if (isDevMode()) {
          console.log("Currency List after copying",this.currencyList);
        }
      });
  }


}
