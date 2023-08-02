import { Component, OnInit, AfterViewInit, ViewChild, SkipSelf, OnDestroy } from '@angular/core';
import { ApiServiceService } from 'src/app/json-data-import/api-service/api-service.service';
import { ListCurrencyResponse, SingleCurrencyObject } from 'src/app/json-data-import/currencies-interface';
import { JsonDataImportComponent } from 'src/app/json-data-import/json-data-import.component';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss'],
})
export class CurrencyListComponent implements OnInit{
  // currencyList$!: ListCurrencyResponse;

  // currencyList!: ListCurrencyResponse;

  currencyList$: any;

  currencyList: any;

  constructor(public jsonDataImportService: JsonDataImportService) {}
  ngOnDestroy(): void {
    console.log("second method destroy",this.currencyList);
  }

  ngAfterViewInit(): void {
    // console.log(this.apiService);
    this.jsonDataImportService.getCurrencies$.subscribe((currencies) => {
      this.currencyList = currencies;
      console.log("second method",this.currencyList);
    })
    console.log("second method after",this.currencyList);
  }

  @ViewChild(JsonDataImportComponent, { static: true })
  apiService!: JsonDataImportComponent;

  ngOnInit(): void {
    // console.log(this.apiService);

    this.apiService.getCurrencies().subscribe((currencies) => {
      this.currencyList$ = currencies;
      console.log(this.currencyList$.currencies);
    });

    this.jsonDataImportService.getCurrencies$.subscribe((currencies) => {
      this.currencyList = currencies;
      console.log("second method",this.currencyList);
    })
  }

  // posts: any;
  // errorMessage: string = '';

  // constructor(private apiservice: ApiServiceService) {}

  // ngOnInit() {
  //   this.apiservice.getAllPosts().subscribe(
  //     posts => {
  //       this.posts = posts
  //       console.log(this.posts)
  //     },
  //     error => {
  //       this.errorMessage = error;
  //       console.log(this.errorMessage)
  //     }
  //   );
  // }
}
