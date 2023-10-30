import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  isDevMode,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
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

  currencyNames: string[] = [];

  @Input() selectedCurrency: string = 'EUR';

  @Input() title = 'Base currency';

  @Input() date = new Date();

  @Output('updateBaseCurrency') selectedCurrencyEvent: EventEmitter<string> =
    new EventEmitter<string>();

  constructor(
    private jsonDataImportService: JsonDataImportService,
    private copyService: CurrencyObjectsHardCopyService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }
  /**
   * Fetches currency list
   */
  fetchData(): void {
    if (isDevMode()) {
      console.log(this.currencyList);
    }

    this.jsonDataImportService
      .getCurrencies(this.date)
      .subscribe((data: ListCurrencyResponse) => {
        this.currencyList = this.copyService.copy(data);
        if (isDevMode()) {
          console.log(this.currencyList);
        }
      });
  }

  /**
   * Changes base currency
   * @param currency New base currency
   */
  selectCurrency(currency: string) {
    this.selectedCurrencyEvent.emit(currency);
    if (isDevMode()) {
      console.log(
        'New currency selected, pushing new currency to subsrcibers',
        currency
      );
    }
  }

  /**
   * Changes title of currency dropdown menu
   * @param title New title
   */
  changeTitle(title: string): void {
    this.title = title;
  }
}
