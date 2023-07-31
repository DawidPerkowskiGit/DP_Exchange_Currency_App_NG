import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import {} from './currencies-interface'
import { ListCurrencyResponse } from './currencies-interface';
import { HttpClient } from '@angular/common/http';
import { log } from 'console';

@Component({
  selector: 'app-json-data-import',
  templateUrl: './json-data-import.component.html',
  styleUrls: ['./json-data-import.component.scss']
})
export class JsonDataImportComponent implements OnInit {

  public currenciesBody!: ListCurrencyResponse;
  public currenciesJson: string = "";
  public jsonDataResult: any;

  constructor() {
   }

  ngOnInit(): void {
    console.log("json-data-import on init");
  }

}
