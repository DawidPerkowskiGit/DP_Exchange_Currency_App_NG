import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { ExchangesObject, ListCurrencyResponse, SingleRatesObject } from "./currencies-interface";
import { environment } from "src/environments/environment.prod"

@Injectable({
    providedIn: 'root',
  })
  export class JsonDataImportService {

    constructor(private http: HttpClient) { }

    
    getCurrencies(): Observable<ListCurrencyResponse> {
      return this.http.get<ListCurrencyResponse>(
        environment.API_ENPOINT + environment.CURRENCIES_URL
      );
    }

    getLatestExchange(): Observable<ExchangesObject> {
      let completeUrl = environment.API_ENPOINT + environment.EXCHANGE_URL + '?' + environment.API_KEY_ATTRIBUTE + environment.NG_API_KEY;
      return this.http.get<ExchangesObject>(completeUrl);
    }

  }