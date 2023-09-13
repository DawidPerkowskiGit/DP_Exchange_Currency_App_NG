import { Component, OnInit } from '@angular/core';
import { ListCurrencyResponse } from './currencies-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
