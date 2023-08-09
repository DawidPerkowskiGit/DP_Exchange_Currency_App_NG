import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { ExchangesObject, ListCurrencyResponse } from "./currencies-interface";
import { environment } from "src/environments/environment"
import { ApiUrlComposeService } from "../tools/api-url-compose-service";

@Injectable({
    providedIn: 'root',
  })
  export class JsonDataImportService {

    constructor(private http: HttpClient,
      private urlComposeService: ApiUrlComposeService) { }

        getCurrencies(): Observable<ListCurrencyResponse> {
      return this.http.get<ListCurrencyResponse>(
        this.urlComposeService.composeUrl([environment.CURRENCIES_URL])
      ).pipe(
        shareReplay(1)
      );
    }

    getLatestExchange(): Observable<ExchangesObject> {
      // let completeUrl = environment.API_ENPOINT + environment.EXCHANGE_URL + '?' + environment.API_KEY_ATTRIBUTE;
      let parameters: string[];
      parameters = [environment.EXCHANGE_URL];
      if (environment.production == false) {
        parameters.push(environment.API_KEY_ATTRIBUTE + environment.NG_API_KEY);
      }
      
      return this.http.get<ExchangesObject>(
        this.urlComposeService.composeUrl(parameters)
        ).pipe(
        shareReplay(1)
      );
    }
  }