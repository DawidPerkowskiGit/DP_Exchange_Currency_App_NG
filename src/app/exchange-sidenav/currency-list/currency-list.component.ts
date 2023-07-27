import { Component, Inject, Input, OnInit, AfterViewInit, AfterContentInit, ViewChild } from '@angular/core';
import { log } from 'console';
import { Subject, catchError, of } from 'rxjs';
import { ApiServiceComponent } from 'src/app/json-data-import/api-service/api-service.component';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit, AfterViewInit {

  constructor( ) { }
  
  ngAfterViewInit(): void {
    console.log(this.apiService);
  }

  @ViewChild(JsonDataImportService, {static: true}) apiService!: JsonDataImportService;

  // @ViewChild(ApiServiceComponent) apiService: any;


  ngOnInit(): void {
    console.log(this.apiService);
    // this.jsonData = this.jsonDataImportService.getRequestData();
    // console.log("------- data from currency list on init :: ",this.jsonData);
  }
  
}
