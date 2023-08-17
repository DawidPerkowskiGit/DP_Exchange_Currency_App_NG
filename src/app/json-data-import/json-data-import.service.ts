import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { CurrenciesLocations, ExchangesObject, ListCurrencyResponse } from './currencies-interface';
import { environment } from 'src/environments/environment';
import { ApiUrlComposeService } from '../tools/api-url-compose-service';

@Injectable({
  providedIn: 'root',
})
export class JsonDataImportService {
  constructor(
    private http: HttpClient,
    private urlComposeService: ApiUrlComposeService
  ) {}

  getCurrencies(): Observable<ListCurrencyResponse> {
    return this.http
      .get<ListCurrencyResponse>(
        this.urlComposeService.composeUrl([environment.CURRENCIES_URL])
      )
      .pipe(shareReplay(1));
  }

  getCurrenciesAndLocations(): Observable<CurrenciesLocations[]> {
    return this.http
    .get<CurrenciesLocations[]>(
      this.urlComposeService.composeUrl([environment.LOCATIONS_URL])
    )
    .pipe(shareReplay(1));
  }

  getLatestExchange(
    baseCurrency?: string,
    exchangeDate?: string
  ): Observable<ExchangesObject> {
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
      console.log('Request parameters: ' + parameters);
    }

    return this.http
      .get<ExchangesObject>(this.urlComposeService.composeUrl(parameters))
      .pipe(shareReplay(1));
  }
}
