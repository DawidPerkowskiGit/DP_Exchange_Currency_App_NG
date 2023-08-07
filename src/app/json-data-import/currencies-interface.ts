export class ListCurrencyResponse {
    currencies!: Map<number, string>;
}

export class ExchangesObject {
    success!: boolean;
    date!: Date;
    base!: string;
    rates!: Map<string, number>;
}