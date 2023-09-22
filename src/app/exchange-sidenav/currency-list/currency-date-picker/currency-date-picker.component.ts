import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  isDevMode,
} from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-currency-date-picker',
  templateUrl: './currency-date-picker.component.html',
  styleUrls: ['./currency-date-picker.component.scss'],
})
export class CurrencyDatePickerComponent implements OnInit {
  @Output('updateExchangeDate') changedExchangeDate: EventEmitter<
    MatDatepickerInputEvent<Date>
  > = new EventEmitter<MatDatepickerInputEvent<Date>>();

  changeDate(type: string, event: MatDatepickerInputEvent<Date>) {
    if (isDevMode()) {
      console.log('Date changed: ', event);
    }

    this.changedExchangeDate.emit(event);
  }

  @Input() title = 'Exchange date';

  @Input() initialDate = new Date();

  constructor() {}

  ngOnInit(): void {}
}
