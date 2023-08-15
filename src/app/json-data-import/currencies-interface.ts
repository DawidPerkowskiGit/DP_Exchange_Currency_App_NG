// export class ListCurrencyResponse {
//     currencies!: Map<number, string>;
// }

export class ListCurrencyResponse {
    currencies: CurrencyEntry[] = [];
}

export class CurrencyEntry{
    isoName!: string;
    fullName!: string;

    // constructor() {}

    constructor(isoName: string, fullName: string) {
        this.isoName = isoName;
        this.fullName = fullName;
    }
}

export class ExchangesObject {
    success!: boolean;
    date!: Date;
    base!: string;
    rates!: Map<string, number>;
}