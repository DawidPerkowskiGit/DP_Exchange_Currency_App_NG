import { Injectable } from "@angular/core";
import { ExchangesObject } from "./currencies-interface";

@Injectable({
    providedIn: "any"
})
export class ExchangesObjectCopyingService {
    // inputClass!: ExchangesObject;

    // constructor(inputClass: ExchangesObject) {
    //     this.inputClass = inputClass;
    // }

    // copy(): ExchangesObject {
    //     let output: ExchangesObject = new ExchangesObject();

    //     output.success = this.inputClass.success;
    //     output.date = this.inputClass.date;
    //     output.base = this.inputClass.base;
    //     output.rates = new Map<string, number>();
    //     for (let key in this.inputClass.rates.keys) {
    //         output.rates.set(key, this.inputClass.rates.get(key)!);
    //     }

    //     return output;
    // }


    constructor() {
    }

    copy(input: ExchangesObject): ExchangesObject {
        let output: ExchangesObject = new ExchangesObject();

        output.success = input.success;
        output.date = input.date;
        output.base = input.base;
        output.rates = new Map<string, number>();
        // for (let key in input.rates.keys) {
        //     output.rates.set(key, input.rates.get(key)!);
        // }

        // input.rates.forEach((key: string, value: number) => {
        //     output.rates.set(key, value);
        // });

        // console.log('input.rates.keys ::: -',input.rates.keys());

        for (let key in input.rates) {
            output.rates.set(key, input.rates.get(key)!);
        }

        return output;
    }
}