import { Component, Input, OnInit } from '@angular/core';
import { Subject, catchError, of, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-service',
  templateUrl: './api-service.component.html',
  styleUrls: ['./api-service.component.scss']
})
export class ApiServiceComponent implements OnInit {

  public jsonDataResult: any;

  // constructor(private http: HttpClient) {
  //   this.http.get('https://exchangecurrencyapp-dp-render.onrender.com/api/currencies').subscribe((res) => {
  //   // this.http.get('./src/app/json-data-import/jsonMultipleExchangesRequestBody.json').subscribe((res) => {
  //   // this.http.get('http://localhost:8080/api/currencies').subscribe((res) => {
  //     this.jsonDataResult = res;
  //     console.log('--- result from import service constructor :: ', this.jsonDataResult);
  //   });
  // }
  // ngOnInit(): void {
  //   console.log('--- result from import service constructor :: ', this.jsonDataResult);
  // }

  // getJsonString() {
  //   return this.jsonDataResult;
  // }

  // getRequestData(): string {
  //   this.http.get('http://localhost:8080/api/currencies').subscribe((res) => {
  //     this.jsonDataResult = res;
  //     console.log('--- result from import service :: ', this.jsonDataResult);
  //   });
  //   return this.jsonDataResult
  // }

  // getCurrencies$ = this.http.get('http://localhost:8080/api/currencies').pipe(
  //   shareReplay(1)
  // );

  getJsonString() {
    console.log('--- result from import service getJsonString :: ', this.jsonDataResult);
    return this.jsonDataResult;
  }

  getRequestData(): string {
    this.jsonDataResult = "modified data by getRequestData()";
    console.log('--- result from import service getRequestData :: ', this.jsonDataResult);
    return this.jsonDataResult
  }

  getCurrencies$ = "data modified by getCurrencies$()"

  ngOnInit(): void {
    this.jsonDataResult = "modified data by ngOnInit()";
    console.log('--- result from import service ngOnInit :: ', this.jsonDataResult);
  }

}
