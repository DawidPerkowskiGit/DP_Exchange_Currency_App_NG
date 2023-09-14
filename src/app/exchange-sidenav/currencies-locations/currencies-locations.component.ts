import { Component, OnInit, isDevMode } from '@angular/core';
import { CurrenciesLocations } from 'src/app/json-data-import/currencies-interface';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
import { CurrencyLocationsObjectsHardCopyService } from 'src/app/tools/currency-locations-objects-hard-copy-service';

@Component({
  selector: 'app-currencies-locations',
  templateUrl: './currencies-locations.component.html',
  styleUrls: ['./currencies-locations.component.scss'],
})
export class CurrenciesLocationsComponent implements OnInit {
  currencyList: CurrenciesLocations[] = [];

  constructor(
    private jsonDataImportService: JsonDataImportService,
    private copyService: CurrencyLocationsObjectsHardCopyService
  ) {}

  dataIsBeeingFetched: boolean = false;

  /**
   * Get currencies and locations data on view init
   */

  ngOnInit(): void {
    if (isDevMode()) {
      console.log(this.currencyList);
    }
    this.dataIsBeeingFetched = true;

    this.jsonDataImportService
      .getCurrenciesAndLocations()
      .subscribe((data: CurrenciesLocations[]) => {
        this.currencyList = this.copyService.copy(data);
        if (isDevMode()) {
          console.log(
            'Currency and Locations List after copying ::::: ------',
            this.currencyList
          );
        }
        this.dataIsBeeingFetched = false;
      });
  }
}
