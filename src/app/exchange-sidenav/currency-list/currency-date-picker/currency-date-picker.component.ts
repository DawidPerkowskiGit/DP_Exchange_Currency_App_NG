import {
  Component,
  EventEmitter,
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

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  changeDate(type: string, event: MatDatepickerInputEvent<Date>) {
    if (isDevMode()) {
      console.log('Date changed: ', event);
    }

    this.changedExchangeDate.emit(event);
  }

  constructor() {}

  ngOnInit(): void {}
}
