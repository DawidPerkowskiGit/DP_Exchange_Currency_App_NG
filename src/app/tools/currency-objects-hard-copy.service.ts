import { Injectable } from "@angular/core";
import { BuildMapService } from "./build-map.service";
import { ListCurrencyResponse } from "../json-data-import/currencies-interface";

@Injectable({
    providedIn: "any"
})
export class CurrencyObjectsHardCopyService {
    constructor(private buildMapService: BuildMapService) {
    }

    copy(input: ListCurrencyResponse): ListCurrencyResponse {
        let output: ListCurrencyResponse = new ListCurrencyResponse();

    
        output.currencies = new Map<number, string>();
        output.currencies = this.buildMapService.buildMap(input.currencies);
        return output;
    }

}