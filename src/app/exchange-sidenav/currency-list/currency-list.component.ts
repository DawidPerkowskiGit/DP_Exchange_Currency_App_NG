import { Component, Inject, Input, OnInit } from '@angular/core';
import { JsonDataImportComponent } from 'src/app/json-data-import/json-data-import.component';
import { JsonDataImportModule } from 'src/app/json-data-import/json-data-import.module';
import { JsonDataImportService } from 'src/app/json-data-import/json-data-import.service';
@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  constructor(public jsonDataImportService: JsonDataImportService,
    ) {}

  @Input()jsonData: string = "";

  ngOnInit(): void {
    this.jsonData = this.jsonDataImportService.jsonDataResult;
    console.log("data " + this.jsonData);
  }

  

}
