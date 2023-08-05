import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { ListCurrencyResponse } from "./currencies-interface";
import { environment } from "src/environments/environment.prod"

@Injectable({
    providedIn: 'root',
  })
  export class JsonDataImportService {

    constructor(private http: HttpClient) { }

    
    getCurrencies(): Observable<ListCurrencyResponse> {
      return this.http.get<ListCurrencyResponse>(
        environment.apiEndpoint + '/currencies'
      );
    }

  }