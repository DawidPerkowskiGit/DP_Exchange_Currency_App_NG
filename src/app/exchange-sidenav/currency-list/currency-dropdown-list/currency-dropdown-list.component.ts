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

  selectedCurrency: string = 'EUR';

  // title: string = 'Base currency';

  // @Input() inputTitle(titlein: string) {
  //   this.title = titlein;
  // }

  @Input() title = 'Base currency';

  @Output('updateBaseCurrency') selectedCurrencyEvent: EventEmitter<string> =
    new EventEmitter<string>();

  constructor(
    private jsonDataImportService: JsonDataImportService,
    private copyService: CurrencyObjectsHardCopyService
  ) {}

  ngOnInit(): void {
    if (isDevMode()) {
      console.log(this.currencyList);
    }

    this.jsonDataImportService
      .getCurrencies()
      .subscribe((data: ListCurrencyResponse) => {
        this.currencyList = this.copyService.copy(data);
        if (isDevMode()) {
          console.log(this.currencyList);
        }
      });
  }

  selectCurrency(currency: string) {
    this.selectedCurrencyEvent.emit(currency);
    // this.nextCurrency.next(currency);
    if (isDevMode()) {
      console.log(
        'New currency selected, pushing new currency to subsrcibers',
        currency
      );
    }
  }

  changeTitle(title: string): void {
    this.title = title;
  }
}
