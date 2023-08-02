import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import {} from './currencies-interface';
import { ListCurrencyResponse } from './currencies-interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { log } from 'console';
import { Observable, Subject, shareReplay } from 'rxjs';

@Component({
  selector: 'app-json-data-import',
  templateUrl: './json-data-import.component.html',
  styleUrls: ['./json-data-import.component.scss'],
})
export class JsonDataImportComponent implements OnInit {
  public jsonDataResult: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getCurrencies(): Observable<ListCurrencyResponse> {
    return this.http.get<ListCurrencyResponse>(
      'http://localhost:8080/api/currencies'
    );
  }
}
