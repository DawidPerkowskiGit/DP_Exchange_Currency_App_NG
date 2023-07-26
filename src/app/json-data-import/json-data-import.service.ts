import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsonDataImportService {
  public jsonDataResult: any;

  constructor(private http: HttpClient) {
    // this.http.get('https://exchangecurrencyapp-dp-render.onrender.com/api/currencies').subscribe((res) => {
    // this.http.get('./src/app/json-data-import/jsonMultipleExchangesRequestBody.json').subscribe((res) => {
    this.http.get('http://localhost:8080/api/currencies').subscribe((res) => {
      this.jsonDataResult = res;
      console.log('--- result :: ', this.jsonDataResult);
    });
  }

  getJsonString() {
    return this.jsonDataResult;
  }
}
