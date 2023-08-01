import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { shareReplay } from "rxjs";
import { ListCurrencyResponse } from "./currencies-interface";

@Injectable({
    providedIn: 'root',
  })
  export class JsonDataImportService {

    constructor(private http: HttpClient) { }

    
  getCurrencies$ = this.http.get<ListCurrencyResponse>('http://localhost:8080/api/currencies').pipe(
    shareReplay(1)
  );

  }