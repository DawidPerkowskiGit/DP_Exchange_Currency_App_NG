import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonDataImportService implements OnInit{
  public jsonDataResult: string = '';

  constructor(private http: HttpClient) {
  }

  // ngOnInit(): void {
  //   this.http.get('http://localhost:8080/api/currencies').subscribe((res) => {
  //     this.jsonDataResult = res;
  //     console.log('--- result from import service constructor :: ', this.jsonDataResult);
  //   });
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
    return this.jsonDataResult;
  }

  getRequestData(): string {
    this.jsonDataResult = "modified data by getRequestData()";
    return this.jsonDataResult
  }

  getCurrencies$ = "data modified by getCurrencies$()"

  ngOnInit(): void {
    this.jsonDataResult = "modified data by ngOnInit()";
  }
}
