import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListCurrencyResponse } from '../currencies-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) {}

  getAllPosts(): Observable<ListCurrencyResponse[]> {
    return this.httpClient.get<ListCurrencyResponse[]>('http://localhost:8080/api/currencies');
  }
}