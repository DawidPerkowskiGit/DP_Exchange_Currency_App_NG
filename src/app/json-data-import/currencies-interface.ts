export class SingleCurrencyObject {
    id!: number;
    name!: string;
}

export class ListCurrencyResponse {
    currencies!: SingleCurrencyObject[];
}

// export interface ListCurrencyResponse {
//     currencies: {
//         id: number;
//         name: string;
//     };
// }

export class ExchangesObject {
    success!: boolean;
    date!: Date;
    base!: string;
    // rates: Map<string, number> = new Map([
    //     ['', 0]
    // ]);
    rates!: Map<string, number>;
    // rates!: SingleRatesObject[];
}

export class SingleRatesObject {
    // rates!: Map<string, number>;

}