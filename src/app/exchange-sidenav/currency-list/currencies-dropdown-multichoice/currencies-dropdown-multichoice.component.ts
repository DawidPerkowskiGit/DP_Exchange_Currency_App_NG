import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  isDevMode,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListCurrencyResponse } from 'src/app/json-data-import/currencies-interface';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
import { CurrencyObjectsHardCopyService } from 'src/app/tools/currency-objects-hard-copy.service';

@Component({
  selector: 'app-currencies-dropdown-multichoice',
  templateUrl: './currencies-dropdown-multichoice.component.html',
  styleUrls: ['./currencies-dropdown-multichoice.component.scss'],
})
export class CurrenciesDropdownMultichoiceComponent implements OnInit {
  currencyList!: ListCurrencyResponse;

  @Input() selectedCurrency: string = 'EUR';

  @Input() title = 'Base currency';

  @Input() date = new Date();

  @Output('updateBaseCurrency') selectedCurrencyEvent: EventEmitter<string> =
    new EventEmitter<string>();

  @Output() dataLoaded: boolean = false;

  curernciesForm = new FormControl();

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
    this.dataLoaded = false;
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
    this.dataLoaded = true;
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
