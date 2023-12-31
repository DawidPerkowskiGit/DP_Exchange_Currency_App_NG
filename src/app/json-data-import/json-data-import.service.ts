import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import {
  CalcuatedExchangeRates,
  CurrenciesLocations,
  ExchangesBody,
  ExchangesObject,
  ListCurrencyResponse,
} from './currencies-interface';
import { environment } from 'src/environments/environment';
import { ApiUrlComposeService } from '../tools/api-url-compose-service';
import { DatePickerToStringService } from '../tools/date-picker-to-string-service';
/**
 * Service user to fetch the data form REST API endpoint in JSON format and casts it to TS obejct format
 */
@Injectable({
  providedIn: 'root',
})
export class JsonDataImportService {
  constructor(
    private http: HttpClient,
    private urlComposeService: ApiUrlComposeService,
    private dateTransformService: DatePickerToStringService
  ) {}

  /**
   * Fetches currencies list data
   * @returns Currencies list in ListCurrencyResponse format
   */
  getCurrencies(date?: Date): Observable<ListCurrencyResponse> {
    let parameters: string[] = [];
    parameters.push(environment.CURRENCIES_URL);
    if (date != null) {
      parameters.push(
        environment.CURRENCY_DATE_ATTRIBUTE +
          this.dateTransformService.transformDateToString(date)
      );
    }

    if (isDevMode()) {
      console.log('Currencies request parameters: ' + parameters);
    }
    return this.http
      .get<ListCurrencyResponse>(this.urlComposeService.composeUrl(parameters))
      .pipe(shareReplay(1));
  }

  /**
   * Fetches currencies and their locations
   * @returns  Currencies and lcoations data in CurrenciesLocations format
   */
  getCurrenciesAndLocations(): Observable<CurrenciesLocations[]> {
    return this.http
      .get<CurrenciesLocations[]>(
        this.urlComposeService.composeUrl([environment.LOCATIONS_URL])
      )
      .pipe(shareReplay(1));
  }

  /**
   * Fetches exchange rated data
   * @param baseCurrency Optional - base currency used to calculate ratios
   * @param exchangeDate Optional - exchage rates date
   * @returns Exchange rated data in ExchangesObject format
   */
  getLatestExchange(
    baseCurrency?: string,
    exchangeDate?: string
  ): Observable<ExchangesBody> {
    let parameters: string[];
    parameters = [environment.EXCHANGE_URL];
    if (environment.production == false) {
      parameters.push(environment.API_KEY_ATTRIBUTE + environment.NG_API_KEY);
    }

    if (baseCurrency != null) {
      parameters.push(environment.BASE_CURRENCY_ATTRIBUTE + baseCurrency);
    }

    if (exchangeDate != null) {
      parameters.push(environment.START_DATE_ATTRIBUTE + exchangeDate);
    }

    if (isDevMode()) {
      console.log('Exchange request parameters: ' + parameters);
    }

    return this.http
      .get<ExchangesBody>(this.urlComposeService.composeUrl(parameters))
      .pipe(shareReplay(1));
  }

  /**
   * Fetches historical exchange rate data of single currency from multiple days
   * @param baseCurrency Exchange rates compared to this currency
   * @param requestedCurrency Requested currency exchange rates
   * @param startDate From date
   * @param finishDate To date
   * @returns Array of exchange rates data from multiple days
   */

  getHistoricalExchangeRatesOfOneCurrency(
    baseCurrency?: string,
    requestedCurrency?: string,
    startDate?: string,
    finishDate?: string
  ): Observable<ExchangesBody> {
    let parameters: string[];
    parameters = [environment.EXCHANGE_URL];
    if (environment.production == false) {
      parameters.push(environment.API_KEY_ATTRIBUTE + environment.NG_API_KEY);
    }

    if (baseCurrency != null) {
      parameters.push(environment.BASE_CURRENCY_ATTRIBUTE + baseCurrency);
    }

    if (requestedCurrency != null) {
      parameters.push(
        environment.REQUESTED_CURRENCY_ATTRIBUTE + requestedCurrency
      );
    }

    if (startDate != null) {
      parameters.push(environment.START_DATE_ATTRIBUTE + startDate);
    }

    if (finishDate != null) {
      parameters.push(environment.FINISH_DATE_ATTRIBUTE + finishDate);
    }

    if (isDevMode()) {
      console.log('Request parameters: ' + parameters);
    }

    return this.http
      .get<ExchangesBody>(this.urlComposeService.composeUrl(parameters))
      .pipe(shareReplay(1));
  }
  /**
   * Fetches historical exchange rate data of single currency from single day
   * @param baseCurrency Exchange rates compared to this currency
   * @param requestedCurrency Requested currency exchange rates
   * @param startDate From date
   * @param finishDate To date
   * @returns Array of exchange rates data from single day
   */
  getHistoricalExchangeRatesOfOneCurrencySignleDay(
    baseCurrency?: string,
    requestedCurrency?: string,
    startDate?: string,
    finishDate?: string
  ): Observable<ExchangesObject> {
    let parameters: string[];
    parameters = [environment.EXCHANGE_URL];
    if (environment.production == false) {
      parameters.push(environment.API_KEY_ATTRIBUTE + environment.NG_API_KEY);
    }

    if (baseCurrency != null) {
      parameters.push(environment.BASE_CURRENCY_ATTRIBUTE + baseCurrency);
    }

    if (requestedCurrency != null) {
      parameters.push(
        environment.REQUESTED_CURRENCY_ATTRIBUTE + requestedCurrency
      );
    }

    if (startDate != null) {
      parameters.push(environment.START_DATE_ATTRIBUTE + startDate);
    }

    if (finishDate != null) {
      parameters.push(environment.FINISH_DATE_ATTRIBUTE + finishDate);
    }

    if (isDevMode()) {
      console.log('Request parameters: ' + parameters);
    }

    return this.http
      .get<ExchangesObject>(this.urlComposeService.composeUrl(parameters))
      .pipe(shareReplay(1));
  }

  /**
   * Fetch calculated currency value based on input value and other parameters.
   * @param baseCurrency Exchange rates relative to the base currency
   * @param requestedCurrency Result exchange rates
   * @param exchangeDate Date of exchange
   * @param requestedAmount Amount of currency toi be calculated
   * @returns Obejct which stores all the data fetched from the API service
   */

  getCalculatedRatio(
    baseCurrency?: string,
    requestedCurrency?: string,
    exchangeDate?: string,
    requestedAmount?: number
  ): Observable<CalcuatedExchangeRates> {
    let parameters: string[];
    parameters = [environment.EXCHANGE_URL];
    if (environment.production == false) {
      parameters.push(environment.API_KEY_ATTRIBUTE + environment.NG_API_KEY);
    }

    if (baseCurrency != null) {
      parameters.push(environment.BASE_CURRENCY_ATTRIBUTE + baseCurrency);
    }

    if (requestedCurrency != null) {
      parameters.push(
        environment.REQUESTED_CURRENCY_ATTRIBUTE + requestedCurrency
      );
    }

    if (requestedAmount != null) {
      parameters.push(
        environment.CALCULATE_CURRENCY_ATTRIBUTE + requestedAmount
      );
    }

    if (exchangeDate != null) {
      parameters.push(environment.START_DATE_ATTRIBUTE + exchangeDate);
    }

    if (isDevMode()) {
      console.log('Calculate ratio request parameters: ' + parameters);
    }

    return this.http
      .get<CalcuatedExchangeRates>(
        this.urlComposeService.composeUrl(parameters)
      )
      .pipe(shareReplay(1));
  }
}
