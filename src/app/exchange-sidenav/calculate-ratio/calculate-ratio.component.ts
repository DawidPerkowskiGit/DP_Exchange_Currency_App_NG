import { Component, Input, OnChanges, OnInit, SimpleChanges, isDevMode } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { CalcuatedExchangeRates } from 'src/app/json-data-import/currencies-interface';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
import { CalcuatedExchangeRatesDataService } from 'src/app/tools/calculated-exchange-rates-data';
import { DatePickerToStringService } from 'src/app/tools/date-picker-to-string-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-calculate-ratio',
  templateUrl: './calculate-ratio.component.html',
  styleUrls: ['./calculate-ratio.component.scss']
})
export class CalculateRatioComponent implements OnInit, OnChanges {

  exchange!: CalcuatedExchangeRates;

  baseCurrency = environment.DEFAULT_BASE_CURRENCY;

  requestedCurrency = environment.DEFAULT_REQUESTED_CURRENCY;

  exchangeDate: Date = new Date();

  requestedValue: number = 1.0;

  rateControl = new FormControl("", [Validators.min(0)])

  requestedcurrencyTitle: string = "Requested currency";
  baseCurrencyTitle: string = "Compared to";
  startDateTitle: string = "Exchange date from";

  dataIsBeeingFetched: boolean = false;

  constructor(private jsonDataImportService: JsonDataImportService,
      private dateTransformService: DatePickerToStringService,
      private copyService: CalcuatedExchangeRatesDataService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.requestedValue = changes['requestedValue'].currentValue;
  }

  ngOnInit(): void {
  }

  requestData() {
    this.dataIsBeeingFetched = true;
    this.jsonDataImportService
      .getCalculatedRatio(this.baseCurrency, this.requestedCurrency, this.dateTransformService.transformDateToString(this.exchangeDate), this.requestedValue)
      .subscribe((data: CalcuatedExchangeRates) => {
        if (isDevMode()) {
          console.log(data);
        }
        this.exchange = this.copyService.copy(data);
        if (isDevMode()) {
          console.log(this.exchange);
        }
        this.dataIsBeeingFetched = false;
      });

  }

  
  updateBaseCurrency(baseCurrency: string) {
    if (isDevMode()) {
      console.log('Event log base currency :::: ---', baseCurrency);
    }

    this.baseCurrency = baseCurrency;
  }

  updateRequestedCurrency(requestedCurrency: string) {
    if (isDevMode()) {
      console.log('Event log requested currency:::: ---', requestedCurrency);
    }

    this.requestedCurrency = requestedCurrency;

  }

  updateStartDate(date: MatDatepickerInputEvent<Date>) {
    if (isDevMode()) {
      console.log('Previous start date', this.exchangeDate);
      console.log('New data', date);
    }

    this.exchangeDate = date.value!;
  }

  updateValue($event: Event, input: number) {
    this.requestedValue = input
  }

}
