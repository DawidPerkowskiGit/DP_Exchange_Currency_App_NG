/**
 * Stores data of currency list retireved from REST API
 */
export class ListCurrencyResponse {
  currencies: CurrencyEntry[] = [];
}

/**
 * Defines how the currency list is structured
 */
export class CurrencyEntry {
  isoName!: string;
  fullName!: string;

  constructor(isoName: string, fullName: string) {
    this.isoName = isoName;
    this.fullName = fullName;
  }
}

/**
 * Stores data of currencies and locations retireved from REST API
 */
export class CurrenciesLocations {
  isoName!: string;
  fullName!: string;
  locationList!: string[];
}

/**
 * Stores data of exchange rates retireved from REST API
 */
export class ExchangesBody {
  exchangeList!: ExchangesObject[];
}

/**
 * Stores body of an exchange rates retireved from REST API
 */

export class ExchangesObject {
  success!: boolean;
  date!: Date;
  base!: string;
  rates!: Map<string, number>;
}

/**
 * Stores ngx-line-chart data
 */

export class NgxLineChartData {
  name!: string;
  series: NgxSeriesCollection[] = [];
}

/**
 * Stores ngx-line-chart dataset
 */

export class NgxSeriesCollection {
  name!: string;
  value!: number;
}

/**
 * Stores exchange rates calculated from fetched from REST API
 */

export class CalcuatedExchangeRates {
  message!: string;
  exchangeDate!: string;
  requestedValue!: number;
  rate!: number;
  calculatedValue!: number;
  baseCurrency!: string;
  requestedCurrency!: string;
}
