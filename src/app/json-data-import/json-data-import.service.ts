import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { ListCurrencyResponse } from "./currencies-interface";
import { enviroment } from "../enviroments/enviroments";

@Injectable({
    providedIn: 'root',
  })
  export class JsonDataImportService {

    constructor(private http: HttpClient) { }

    
    getCurrencies(): Observable<ListCurrencyResponse> {
      return this.http.get<ListCurrencyResponse>(
        enviroment.apiEndpoint + '/currencies'
      );
    }

  }